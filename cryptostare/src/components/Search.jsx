import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, handleChange }) {
  return (
    <div className="w-80 flex justify-start items-center gap-4 mx-auto bg-darkgrey p-3 rounded-lg mb-6">
      <SearchIcon className="text-grey text-lg" />
      <input
        className="bg-darkgrey text-grey placeholder-grey font-inter text-lg focus:outline-none w-full"
        placeholder="Search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
