import React, { useState } from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../functions/removeItemToWatchlist";

function Grid({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.div
        className={`flex flex-col gap-6 w-64 p-8 bg-darkgrey border-2 rounded-lg border-darkgrey cursor-pointer ${
          coin.price_change_percentage_24h < 0 ? "border-red" : "border-green"
        } hover:border-green hover:border-red transition duration-300`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="flex items-center gap-4">
          <img src={coin.image} className="h-12 w-12 rounded-full" />
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col justify-between">
              <p className="text-lg font-semibold text-white">
                {coin.symbol}
              </p>
              <p className="text-sm text-grey">{coin.name}</p>
            </div>
            <div
              className={`flex justify-center items-center border-2 rounded-full ${
                coin.price_change_percentage_24h < 0
                  ? "border-red text-red"
                  : "border-green text-green"
              } p-2 cursor-pointer`}
              onClick={(e) => {
                if (isCoinAdded) {
                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className={`border-2 rounded-full ${
              coin.price_change_percentage_24h < 0
                ? "border-red text-red"
                : "border-green text-green"
            } p-2`}
          >
            {coin.price_change_percentage_24h.toFixed(2)}%
            {coin.price_change_percentage_24h >= 0 ? (
              <TrendingUpRoundedIcon className="ml-1" />
            ) : (
              <TrendingDownRoundedIcon className="ml-1" />
            )}
          </div>
          <p
            className={`${
              coin.price_change_percentage_24h < 0 ? "text-red" : "text-green"
            } font-semibold text-lg`}
          >
            ${coin.current_price.toLocaleString()}
          </p>
        </div>
        <p className="text-sm text-grey">
          Total Volume: {coin.total_volume.toLocaleString()}
        </p>
        <p className="text-sm text-grey">
          Market Capital: ${coin.market_cap.toLocaleString()}
        </p>
      </motion.div>
    </a>
  );
}

export default Grid;
