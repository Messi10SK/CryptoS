import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Tabs from "../components/Tabs";
import PaginationControlled from "../components/PaginationControlled";


function Dashboard() {


  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);



  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("response", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);



  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };


  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const handlePageChange = (value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  return (
    <>
      <Header />
      <div className="bg-blue">


      {loading ? (
        <Loader />
      ) : (
        <>
        <br/>
          <Search search={search} handleChange={handleChange} />
          <Tabs
            coins={search ? filteredCoins : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationControlled
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
            </div>
      <Footer />
    </>
  );
}

export default Dashboard;








