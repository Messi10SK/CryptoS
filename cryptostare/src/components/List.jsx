import React, { useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../functions/removeItemToWatchlist";

function List({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin?.id));

  return (
    <a href={`/coin/${coin?.id}`}>
      <motion.tr
        className="w-90 p-4 mb-2 flex justify-between items-center mx-auto rounded cursor-pointer hover:bg-darkgrey transition duration-300"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="Coin Image">
          <td className="w-12 mr-4">
            <img src={coin?.image} className="h-12 w-12 rounded-full" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="w-48">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{coin?.symbol}</p>
              <p className="text-sm">{coin?.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price Percentage In 24hrs" placement="bottom-start">
          <td>
            <div className={`flex items-center gap-2 ${coin?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              <div className="border-2 rounded-full py-1 px-2">
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </div>
              {coin?.price_change_percentage_24h >= 0 ? (
                <TrendingUpRoundedIcon />
              ) : (
                <TrendingDownRoundedIcon />
              )}
            </div>
          </td>
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          <td className={`text-right ${coin?.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
            ${coin?.current_price?.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className="text-right">{coin?.total_volume?.toLocaleString()}</td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className="text-right">${coin?.market_cap?.toLocaleString()}</td>
        </Tooltip>
        <td className="hidden">{convertNumber(coin?.market_cap)}</td>
        <td
          className={`w-12 flex justify-center items-center ${coin?.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"}`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemToWatchlist(e, coin?.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin?.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td>
      </motion.tr>
    </a>
  );
}

export default List;
