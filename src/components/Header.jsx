import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`bg-black p-4 fixed w-full ${isScrolled ? 'bg-opacity-80' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white">
            <Link to="/">
              <h1 className="text-xl font-semibold tracking-tight">CryptoStare</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/compare">Compare</NavLink>
              <NavLink to="/watchlist">Favourites</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/payment">Make Payment In Crypto</NavLink>
            </div>
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
