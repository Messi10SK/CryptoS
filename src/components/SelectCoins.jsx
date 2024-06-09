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
    <div className="flex justify-center items-center gap-6 p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center gap-2">
        <p className="text-gray-200 font-semibold">Crypto 1</p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          className="w-52 bg-blue text-white"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3a80e9",
            },
          }}
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
      <div className="flex items-center gap-2">
        <p className="text-gray-200 font-semibold">Crypto 2</p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          className="w-52 bg-green text-white"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3a80e9",
            },
          }}
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
      <div className="flex items-center gap-2">
        <p className="text-gray-200 font-semibold">Days</p>
        <SelectDays days={days} handleDaysChange={handleDaysChange} noPTag={true} />
      </div>
    </div>
  );
}

export default SelectCoins;

