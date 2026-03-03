import React from "react";
import MainWrapper from "../layouts/MainWrapper.jsx";

function Settings() {
  return (
    <MainWrapper>
      <div>
        <h2 className="mb-2 text-xl font-semibold">Settings</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          This is where your settings list or settings details can go.
        </p>
      </div>
    </MainWrapper>
  );
}

export default Settings;
