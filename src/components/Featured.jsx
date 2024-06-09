import React from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className='w-full py-32 bg-gray-900 text-white clip-path'>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
        {/* Left */}
        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl font-bold mb-4'>Explore top Cryptos like Bitcoin, Ethereum, and Dogecoin</h2>
          <p className='mb-6'>See all available assets: Cryptocurrencies and NFTs</p>
          <Link to='/dashboard'>
            <button className='btn bg-blue-600 text-white px-4 py-2 rounded'>See More Coins</button>
          </Link>
        </div>
        {/* Right */}
        <div className='relative'>
          {/* Featured Image */}
          <img src='https://t3.ftcdn.net/jpg/04/68/35/26/360_F_468352674_XFsZXwhCBrX85gtKYJfX4ZLhC0NrIXA9.jpg' alt='Featured' className='object-cover w-full h-full rounded-xl' />
          {/* Overlay */}
          <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            {/* Content */}
            <div className='text-center'>
              <h3 className='text-3xl font-bold'>Discover Crypto Opportunities</h3>
              <p className='mt-2'>Unlock the potential of cryptocurrencies and explore new investment possibilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
