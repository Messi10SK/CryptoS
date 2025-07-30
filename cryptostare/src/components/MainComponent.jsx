import React from "react";

import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

const MainComponent = () => {
  return (
    <div className="flex justify-between  tect-white items-start px-6 py-4">
      <div className="info-landing">
        <motion.h1
          className="text-6xl font-bold leading-tight text-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="text-6xl text-blue-500 font-bold leading-tight"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="text-gray-500 font-light"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track crypto through a public API in real time. Visit the dashboard
          to do so!
        </motion.p>
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
           <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-sm uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'>
          <a href='/dashboard'>Dashboard</a>
        </button>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Avi Vashishta using React JS.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
           
            <button className='bg-blue-500 outline:blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-sm uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'>
          <a href='/'>ShareApp</a>
        </button>
          </RWebShare>
        </motion.div>
      </div>
    </div>
  );
};

export default MainComponent;
