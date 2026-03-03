import React from "react";
import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar";
import VulnerabilityBadges from "./VulnerabilityBadges";

function Table({ data }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left text-sm font-medium 
                         text-slate-600 dark:text-slate-300 
                         border-b border-slate-200 dark:border-slate-700">
            <th className="py-3 px-4">Scan Name</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Progress</th>
            <th className="py-3 px-4">Vulnerability</th>
            <th className="py-3 px-4">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-200 dark:border-slate-800
                         hover:bg-slate-50 dark:hover:bg-slate-800/50
                         transition-colors"
            >
              <td className="py-4 px-4 font-medium text-slate-800 dark:text-slate-100">
                {item.name}
              </td>

              <td className="py-4 px-4 text-slate-600 dark:text-slate-300">
                {item.type}
              </td>

              <td className="py-4 px-4">
                <StatusBadge status={item.status} />
              </td>

              <td className="py-4 px-4">
                <ProgressBar value={item.progress} />
              </td>

              <td className="py-4 px-4">
                <VulnerabilityBadges data={item.vulnerabilities} />
              </td>

              <td className="py-4 px-4 text-slate-500 dark:text-slate-400 text-sm">
                {item.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;