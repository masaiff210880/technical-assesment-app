import React from "react";

function ActivityLog() {
  return (
    <div className="text-xs text-gray-600 dark:text-gray-400 space-y-3 font-mono">
      <p>
        [09:00:00] I'll begin a systematic penetration test on{" "}
        <span className="text-teal-500">helpdesk.democorp.com</span>.
      </p>
      <p>[09:01:00] Good! target is online.</p>
      <p>[09:02:00] Excellent reconnaissance results.</p>
      <p>[09:03:00] Found a login page.</p>
      <p>[09:04:00] POST method not allowed.</p>
      <p>[09:05:00] Redirects back to /password/test.</p>
      <p>
        [09:06:00] Access dashboard using{" "}
        <span className="text-teal-500">X-UserId: 10032</span>
      </p>
    </div>
  );
}

export default ActivityLog;
