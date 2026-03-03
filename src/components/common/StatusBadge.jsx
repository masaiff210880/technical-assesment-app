import React from "react";

function StatusBadge({ status }) {
  const statusStyles = {
    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400",
    Failed:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
    Scheduled:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-md ${
        statusStyles[status] || ""
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;