import React from "react";

function CircularProgress() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 rounded-full border-[10px] border-gray-200 dark:border-gray-700" />
        <div className="absolute inset-0 rounded-full border-[10px] border-teal-500 border-t-transparent rotate-45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            0%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            In Progress
          </span>
        </div>
      </div>
    </div>
  );
}

export default CircularProgress;
