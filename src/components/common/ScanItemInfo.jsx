import React from "react";

function ScanItemInfo({ label, value, highlight }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
      <span
        className={`text-sm font-medium ${
          highlight ? "text-teal-500" : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default ScanItemInfo;
