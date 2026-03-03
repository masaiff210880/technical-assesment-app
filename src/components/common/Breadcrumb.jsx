import React from "react";
import { FiChevronRight, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
      <FiHome className="h-3 w-3" />
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const content = item.to ? (
          <Link
            to={item.to}
            className="hover:text-teal-500 dark:hover:text-teal-400"
          >
            {item.label}
          </Link>
        ) : (
          <span>{item.label}</span>
        );

        return (
          <React.Fragment key={item.label + index}>
            <FiChevronRight className="h-3 w-3" />
            <span className={isLast ? "font-medium text-teal-500" : ""}>
              {content}
            </span>
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
