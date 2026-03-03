import React from "react";
import CardStatusBadge from "./CardStatusBadge";

function FindingCard({ severity, title, path, desc }) {
  return (
    <div className="p-4 rounded-xl border bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <CardStatusBadge label={severity} />
        <span className="text-xs text-gray-400">10:45:23</span>
      </div>

      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h4>

      <p className="text-xs text-teal-500 mt-1">{path}</p>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{desc}</p>
    </div>
  );
}

export default FindingCard;
