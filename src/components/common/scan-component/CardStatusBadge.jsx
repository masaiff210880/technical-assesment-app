import React from "react";

function CardStatusBadge({ label }) {
  const styles = {
    Critical: "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400",
    High: "bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400",
    Medium:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${styles[label]}`}
    >
      {label}
    </span>
  );
}

export default CardStatusBadge;
