import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import { get100Coins } from "../utils/get100Coins";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (watchlist.length > 0) {
        const allCoins = await get100Coins();
        if (allCoins) {
          const filteredCoins = allCoins.filter((coin) =>
            watchlist.includes(coin.id)
          );
          setCoins(filteredCoins);
        }
      }
    }
    fetchData();
  }, [watchlist]);

  return (
    <div className="bg-blue">
      <Header />
      {watchlist.length > 0 ? (
        <Tabs coins={coins} />
      ) : (
        <div className="text-center ">
          <h1> No Items In The Watchlist.</h1>
          <a href="/dashboard" >
            <Button>DashBoard</Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
