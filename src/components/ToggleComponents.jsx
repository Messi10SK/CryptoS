import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleComponents = ({ priceType, handlePriceTypeChange }) => {
  return (
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={(newValue) => handlePriceTypeChange(newValue)}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
      sx={{
        borderColor: "var(--blue)", // Setting border color
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid var(--blue)", // Border for grouped buttons
          color: "black !important", // Text color for buttons
        },
        "& .Mui-selected": {
          color: "black !important", // Text color for selected button
        },
      }}
    >
      <ToggleButton value="prices">Prices</ToggleButton>
      <ToggleButton value="market_caps">Market Cap</ToggleButton>
      <ToggleButton value="total_volumes">Total Volume</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleComponents;





























// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: "1.5rem",
//       }}
//     >
//       <ToggleButtonGroup
//         value={priceType}
//         exclusive
//         onChange={(e) => {
//           handlePriceTypeChange(e);
//         }}
//         sx={{
//           "& .Mui-selected": {
//             color: "black !important",
//           },
//           borderColor: "var(--blue)",
//           border: "unset !important",
//           "& .MuiToggleButtonGroup-grouped": {
//             border: "1px solid var(--blue)!important",
//             borderColor: "unset",
//             color: "black !important ",
//           },
//           "& .MuiToggleButton-standard": {
//             color: "black !important",
//           },
//         }}
//       >
//         <ToggleButton value="prices">Prices</ToggleButton>
//         <ToggleButton value="market_caps">Market Cap</ToggleButton>
//         <ToggleButton value="total_volumes">Total Volume</ToggleButton>
//       </ToggleButtonGroup>
//     </div>
//   );
// }
