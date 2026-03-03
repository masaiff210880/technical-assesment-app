import React from "react";

function FooterStats() {
  return (
    <div className="flex items-center justify-between text-xs px-4 py-3 border-t bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex gap-6 text-gray-500 dark:text-gray-400">
        <span>Sub-Agents: 0</span>
        <span>Parallel Executions: 2</span>
        <span>Operations: 1</span>
      </div>

      <div className="flex gap-4 font-medium">
        <span className="text-red-500">Critical: 0</span>
        <span className="text-orange-500">High: 0</span>
        <span className="text-yellow-500">Medium: 0</span>
        <span className="text-green-500">Low: 0</span>
      </div>
    </div>
  );
}

export default FooterStats;
