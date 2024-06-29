import React from 'react';
import { FaSearchDollar } from "react-icons/fa";

export default function Search({ search, handleChange }) {
  return (
    <div className="w-4/5 flex items-center gap-2 mx-auto bg-black p-2 rounded-xl mb-4">
      <FaSearchDollar className="text-gray-400 text-lg" aria-hidden="true" />
      <input
        type="text"
        className="bg-black text-white font-inter w-full outline-none focus:ring-1 focus:ring-blue-500 py-1 px-2 rounded-md"
        placeholder="Search cryptocurrencies"
        value={search}
        onChange={handleChange}
        aria-label="Search"
      />
    </div>
  );
}










































// import React from 'react';
// import { FaSearchDollar } from "react-icons/fa";

// export default function Search({ search, handleChange }) {
//   return (
//     <div className='w-4/5 flex justify-start items-center gap-2 mx-auto bg-black p-2 rounded-xl mb-4'>
//       <FaSearchDollar className="text-gray-400 text-lg" />
//       <input
//         className='bg-black text-white font-inter w-full outline-none focus:ring-1 focus:ring-blue-500 py-1 px-2 rounded-md'
//         placeholder='Search'
//         value={search}
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
