import React from 'react';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import NavCollapse from './NavCollapse';

export default function Header() {
  return (
    <navbar className='sticky top-0 z-50 flex justify-between items-center px-6 py-4'>
      <div>
        <h1 className="text-white text-xl font-semibold">Cryptostare</h1>
      </div>

      <div className="hidden md:flex justify-end items-center gap-4">
        <Switch defaultChecked />
        <a href='/'>Home</a>
        <a href='/compare'>Compare</a>
        <a href='/watchlist'>Watchlist</a>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-sm uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300'>
          <a href='/dashboard'>Dashboard</a>
        </button>
      </div>
<div className='md:hidden'>
<NavCollapse />
</div>
      
    </navbar>
  );
}
