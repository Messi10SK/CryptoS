import React from 'react'
import { FaSearchDollar } from "react-icons/fa";

export default function Search({search,handleChange}) {
  return (
    <>
    <div className='w-4/5 flex justify-start items-center gap-4 mx-auto bg-gray-800 p-3 rounded-2xl mb-6'>
    <FaSearchDollar  sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
    <input 
    className='bg-gray-800 text-gray-400 font-inter text-base border-none w-full'
    placeholder='Search'
    value={search}
    onChange={handleChange}   
    />
    </div>
      
    </>
   
  )
}
