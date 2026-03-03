import React from "react";

function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-3 min-w-[150px]">
      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-2 rounded-full bg-teal-500 transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-slate-600 dark:text-slate-300">
        {value}%
      </span>
    </div>
  );
}

export default ProgressBar;
