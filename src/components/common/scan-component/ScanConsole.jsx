import React from "react";
import ActivityLog from "./ActivityLog";
import FindingCard from "./FindingCard";
import FooterStats from "./FooterStats";

function ScanConsole() {
  return (
    <div className="w-full rounded mt-2 border bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-teal-500 rounded-full" />
          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
            Live Scan Console
          </span>
          <span className="text-xs text-gray-400">Running...</span>
        </div>

        <div className="text-gray-400">×</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-r border-gray-200 dark:border-gray-700">
          <div className="flex gap-6 mb-4 text-sm">
            <span className="text-teal-500 border-b-2 border-teal-500 pb-1">
              Activity Log
            </span>
            <span className="text-gray-400">Verification Loops</span>
          </div>

          <ActivityLog />
        </div>

        <div className="p-4 space-y-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Finding Log
          </h3>

          <FindingCard
            severity="Critical"
            title="SQL Injection in Authentication Endpoint"
            path="/api/users/profile"
            desc="Time-based blind SQL injection confirmed on user-controlled input."
          />

          <FindingCard
            severity="High"
            title="Unauthorized Access to User Metadata"
            path="/api/auth/login"
            desc="Low-privilege user accessed metadata of others."
          />

          <FindingCard
            severity="Medium"
            title="Broken Authentication Rate Limiting"
            path="/api/search"
            desc="No rate limiting detected on login attempts."
          />
        </div>
      </div>

      <FooterStats />
    </div>
  );
}

export default ScanConsole;
