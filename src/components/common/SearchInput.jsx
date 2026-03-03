// SearchInput.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchInput({ value = "", onChange }) {
  return (
    <div className="relative w-full">
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 
                   text-slate-400 dark:text-slate-500"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search scans by name or type..."
        className="
          w-full pl-10 pr-4 py-2 rounded-md border
          outline-none transition-colors duration-200
          
          bg-white text-slate-900 border-slate-300
          placeholder:text-slate-400
          
          focus:ring-2 focus:ring-teal-500 focus:border-teal-500
          
          dark:bg-slate-800
          dark:text-slate-100
          dark:border-slate-700
          dark:placeholder:text-slate-500
        "
      />
    </div>
  );
}

export default SearchInput;
