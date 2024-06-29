import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import LineChart from "../components/LineChart";
import SelectDays from "../components/SelectDays";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CoinGrid from "../components/CoinGrid";
import ToggleComponents from "../components/ToggleComponents";
import { getCoinData } from "../utils/getCoinData";
import { getPrices } from "../utils/getPrices";
import { settingChartData } from "../utils/settingChartData";
import { settingCoinObject } from "../utils/settingCoinObject";

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
    try {
      const coinData = await getCoinData(id, setError);
      if (coinData) {
        settingCoinObject(coinData, setCoin);
        const prices = await getPrices(id, days, priceType, setError);
        if (prices) {
          settingChartData(setChartData, prices);
        }
      } else {
        setError(true); // Handle case where coinData is not fetched properly
      }
    } catch (error) {
      setError(true); // Handle any other errors during data fetching
    } finally {
      setLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    const newDays = event.target.value;
    setDays(newDays);
    await fetchData(newDays, priceType);
  };

  const handlePriceTypeChange = async (event) => {
    const newPriceType = event.target.value;
    setPriceType(newPriceType);
    await fetchData(days, newPriceType);
  };

  const fetchData = async (days, priceType) => {
    setLoading(true);
    try {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Render conditionally based on loading and error states
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
            Sorry, couldn't find the coin you're looking for 😞
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









