import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import LineChart from "../components/LineChart";
import SelectDays from "../components/SelectDays";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CoinGrid from "../components/CoinGrid";
import { getCoinData } from "../utils/getCoinData";
import { getPrices } from "../utils/getPrices";
import { settingChartData } from "../utils/settingChartData";
import { settingCoinObject } from "../utils/settingCoinObject";
import ToggleComponents from "../components/ToggleComponents";

function Coin() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    console.log("Coin DATA>>>>", coinData);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {!error && !loading && coin.id ? (
        <div className="container mx-auto px-4">
         <div className="bg-blue rounded-lg shadow-md mb-6 p-6 flex justify-center">
  <CoinGrid coin={coin} delay={0.5} />
</div>

          <div className="bg-gray-200 rounded-lg shadow-md mb-6 p-6">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData} />
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <Info title={coin.name} desc={coin.desc} />
          </div>
        </div>
      ) : error ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div className="flex justify-center">
            <a href="/dashboard" className="btn btn-blue">
              Dashboard
            </a>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Coin;
