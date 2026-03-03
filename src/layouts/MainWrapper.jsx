import React from "react";

function MainWrapper({ children }) {
  return (
    <div className="h-full w-full overflow-auto  px-2 py-2 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {children}
    </div>
  );
}

export default MainWrapper;