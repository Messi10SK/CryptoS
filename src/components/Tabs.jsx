
import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import CoinGrid from "./CoinGrid"; 

const Tabs = ({ coins, setSearch }) => {
  const renderCoinGrid = () => {
    if (coins.length > 0) {
      return coins.map((coin, index) => (
        <CoinGrid key={coin.id} coin={coin} delay={index * 0.2} />
      ));
    } else {
      return (
        <div className="w-full text-center">
          <h1>No Coin Found</h1>
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          </div>
        </div>
      );
    }
  };
  
  return (
    <TabContext value="grid">
      <TabPanel value="grid">
        <div className="grid-flex flex justify-center items-start flex-wrap w-full bg-blue gap-4">
          {renderCoinGrid()}
        </div>
      </TabPanel>
    </TabContext>
  );
};

export default Tabs;





























// import React from "react";
// import TabContext from "@mui/lab/TabContext";
// import TabPanel from "@mui/lab/TabPanel";
// import CoinGrid from "./CoinGrid"; // Adjust the path as needed

// export default function Tabs({ coins, setSearch }) {
//   return (
//     <TabContext value="grid">
//       <TabPanel value="grid">
//         <div className="grid-flex flex justify-center items-start flex-wrap w-full bg-blue gap-4">
//           {coins.length > 0 ? (
//             coins.map((coin, i) => (
//               <CoinGrid coin={coin} key={i} delay={(i % 4) * 0.2} />
//             ))
//           ) : (
//             <div className="w-full text-center">
//               <h1>Sorry, Couldn't find the coin you're looking for 😞</h1>
//               <div className="flex justify-center mt-8">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={() => setSearch("")}
//                 >
//                   Clear Search
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </TabPanel>
//     </TabContext>
//   );
// }
