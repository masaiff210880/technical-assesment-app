import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function PaginationUI() {
  return (
    <div className="flex items-center mt-3 justify-between px-4 py-3  bg-white text-gray-700  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 transition-colors">
      <p className="text-sm">
        Showing <span className="font-medium">15</span> of{" "}
        <span className="font-medium">100</span> Scans
      </p>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md border bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition">
          <FiChevronLeft size={16} />
        </button>

        <span className="text-sm font-medium px-2">1</span>

        <button className="p-2 rounded-md border bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition">
          <FiChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default PaginationUI;
