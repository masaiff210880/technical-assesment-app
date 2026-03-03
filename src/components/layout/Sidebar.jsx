import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiShield,
  FiCalendar,
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiUser,
} from "react-icons/fi";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: FiGrid },
  { to: "/projects", label: "Projects", icon: FiFolder },
  { to: "/scan", label: "Scans", icon: FiShield },
  { to: "/schedule", label: "Schedule", icon: FiCalendar },
  {
    to: "/notifications",
    label: "Notifications",
    icon: FiBell,
    group: "secondary",
  },
  { to: "/settings", label: "Settings", icon: FiSettings, group: "secondary" },
  { to: "/support", label: "Support", icon: FiHelpCircle, group: "secondary" },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const primaryItems = navItems.filter((item) => !item.group);
  const secondaryItems = navItems.filter((item) => item.group === "secondary");

  return (
    <aside
      className={`flex flex-col border-r border-slate-200 bg-white px-3 py-4 text-sm shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 ${
        collapsed ? "w-20 items-center" : "w-60"
      }`}
    >
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-base font-semibold text-white">
          o
        </div>
        {!collapsed && (
          <span className="text-base font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            aps
          </span>
        )}
      </div>

      <nav className="flex-1 space-y-6">
        <div className="space-y-1">
          {primaryItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 dark:bg-slate-800 dark:text-emerald-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                  collapsed ? "justify-center" : "",
                ].join(" ")
              }
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <item.icon className="h-4 w-4" />
              </span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-800" />

        <div className="space-y-1">
          {secondaryItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-full px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 dark:bg-slate-800 dark:text-emerald-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                  collapsed ? "justify-center" : "",
                ].join(" ")
              }
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <item.icon className="h-4 w-4" />
              </span>
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="mt-5 border-t border-slate-200 dark:border-slate-800"></div>
      <button
        type="button"
        onClick={() => setCollapsed((prev) => !prev)}
        className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs text-slate-700 transition-colors hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-amber-400 text-sm font-semibold text-white">
          <FiUser className="h-4 w-4" />
        </div>
        {!collapsed && (
          <div className="flex-1">
            <div className="truncate text-[11px] font-medium text-slate-900 dark:text-slate-100">
              admin@edu.com
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              Security Lead
            </div>
          </div>
        )}
        <span className="text-base text-slate-400 dark:text-slate-500">
          {collapsed ? ">" : "<"}
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;
