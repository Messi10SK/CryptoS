import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black p-4 sticky w-full ${isScrolled ? 'bg-opacity-80' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-bold flex-shrink-0 text-white">
            <Link to="/">
              <h1 className="text-xl font-semibold tracking-tight">CryptoStare</h1>
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className={`flex-col ${menuOpen ? 'flex' : 'hidden'} md:flex md:flex-row items-center space-x-4 text-xl text-robot text-black`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/compare">Compare</NavLink>
            <NavLink to="/watchlist">Favourites</NavLink>
            <NavLink to="/dashboard">CryptoCurrencies</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white"
    >
      {children}
    </Link>
  );
}
