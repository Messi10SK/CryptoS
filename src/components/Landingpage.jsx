import React from 'react';
import { Link } from 'react-router-dom';
import { RWebShare } from "react-web-share";

export default function LandingPage() {
  return (
    <section className="bg-blue py-16 flex items-center justify-center h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-4 ">Welcome to CryptoStare</h1>
        <p className="text-lg text-gray-300 mb-8">Your go-to platform for tracking cryptocurrency prices, trends, and news.</p>
        <div className="flex justify-center">
          <Link to="/learncrypto">
            <button className="bg-white hover:bg-blue-600 text-black font-bold py-2 px-6 rounded mr-4">Learn More</button>
          </Link>
          <RWebShare
            data={{
              text: "CryptoStare",
              url: "",
              title: "CryptoStare",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded">Share App</button>
          </RWebShare>
        </div>
      </div>
    </section>
  );
}
