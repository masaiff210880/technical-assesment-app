import React from "react";
import CircularProgress from "../CircularProgress";
import Stepper from "../Stepper";
import ScanItemInfo from "../ScanItemInfo";

function ScanProgress() {
  return (
    <div className="w-full rounded border p-4 bg-white border-gray-200 text-gray-800 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex items-center justify-center md:w-1/4 border-r border-gray-200 dark:border-gray-700 pr-6">
          <CircularProgress />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <Stepper />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <ScanItemInfo label="Scan Type" value="Grey Box" />
            <ScanItemInfo label="Targets" value="google.com" />
            <ScanItemInfo label="Started At" value="Nov 22, 09:00AM" />
            <ScanItemInfo label="Credentials" value="2 Active" />
            <ScanItemInfo label="Files" value="Control.pdf" />
            <ScanItemInfo label="Checklists" value="40/350" highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanProgress;
