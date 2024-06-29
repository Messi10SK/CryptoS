import { MenuItem, Select } from "@mui/material";
import React from "react";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className={`flex items-center ${!noPTag ? 'mb-6' : ''} gap-2`}>
      {!noPTag && <p className="text-white">Price change in</p>}
      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "white",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "white",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
