import { MenuItem, Select } from "@mui/material";
import React from "react";
import SelectDays from "./SelectDays";

function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  return (
    <div className="flex flex-wrap justify-start items-center gap-6 m-6">
      <div className="flex items-center gap-1">
        <p>Crypto 1</p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          className="w-52"
        >
          {allCoins
            .filter((coin) => coin.id !== crypto2)
            .map((coin) => (
              <MenuItem value={coin.id} key={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="flex items-center gap-1">
        <p>Crypto 2</p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          className="w-52"
        >
          {allCoins
            .filter((coin) => coin.id !== crypto1)
            .map((coin) => (
              <MenuItem value={coin.id} key={coin.id}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <SelectDays
        days={days}
        handleDaysChange={handleDaysChange}
        noPTag={true}
      />
    </div>
  );
}

export default SelectCoins;
