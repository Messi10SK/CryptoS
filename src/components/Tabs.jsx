import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CoinGrid from "./CoinGrid"; // Adjust the path as needed
 // Assuming you still have some custom styles

export default function Tabs({ coins, setSearch }) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <TabContext value={value}>
      <div className="border-b border-divider">
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
        </TabList>
      </div>
      <TabPanel value="grid">
        <div className="grid-flex flex justify-center items-start flex-wrap w-full gap-4">
          {coins.length > 0 ? (
            coins.map((coin, i) => (
              <CoinGrid coin={coin} key={i} delay={(i % 4) * 0.2} />
            ))
          ) : (
            <div className="w-full text-center">
              <h1>Sorry, Couldn't find the coin you're looking for 😞</h1>
              <div className="flex justify-center mt-8">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setSearch("")}
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      </TabPanel>
    </TabContext>
  );
}
