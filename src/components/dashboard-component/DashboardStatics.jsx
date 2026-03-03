import React from "react";
import { FiRefreshCw, FiSearch } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineWarning } from "react-icons/ai";
import dashboardData from "../../data/dashboardData.json";

const iconMap = {
  Critical: {
    icon: <MdErrorOutline className="text-pink-600 text-lg" />,
    bg: "bg-pink-100 dark:bg-pink-900/30"
  },
  High: {
    icon: <IoWarningOutline className="text-orange-600 text-lg" />,
    bg: "bg-orange-100 dark:bg-orange-900/30"
  },
  Medium: {
    icon: <AiOutlineWarning className="text-yellow-600 text-lg" />,
    bg: "bg-yellow-100 dark:bg-yellow-900/30"
  },
  Low: {
    icon: <FiSearch className="text-blue-600 text-lg" />,
    bg: "bg-blue-100 dark:bg-blue-900/30"
  }
};

const DashboardStatics = () => {
  const { topStats, severityStats } = dashboardData;

  return (
    <div className="bg-white dark:bg-gray-900 rounded p-6 transition-colors duration-300">
      
      <div className="flex flex-wrap items-center justify-between text-sm border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="flex flex-wrap gap-10">
          {topStats.map((item, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                {item.label}:
              </span>
              <span className="font-semibold text-gray-800 dark:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-teal-500 dark:text-teal-400 font-medium">
          <FiRefreshCw className="text-base" />
          <span>10 mins ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
        {severityStats.map((item, index) => {
          const type = item.title.split(" ")[0];
          const severity = iconMap[type];

          return (
            <div key={index}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded flex items-center justify-center ${severity.bg}`}>
                  {severity.icon}
                </div>

                <h3 className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {item.title}
                </h3>
              </div>

              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {item.count}
              </div>

              <p
                className={`text-sm mt-1 ${
                  item.trend === "increase"
                    ? "text-pink-600"
                    : "text-green-600"
                }`}
              >
                {item.change} {item.trend} than yesterday
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardStatics;