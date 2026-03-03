import React from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import Breadcrumb from "../common/Breadcrumb.jsx";
import OutlineButton from "../common/OutlineButton.jsx";

function Header({ breadcrumbItems, rightButtons }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 dark:border-slate-800 dark:bg-slate-900">
      <div className="hidden md:block">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2">
          {rightButtons?.map((btn) => (
            <OutlineButton
              key={btn.label}
              variant={btn.variant}
              onClick={btn.onClick}
            >
              {btn.label}
            </OutlineButton>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;

