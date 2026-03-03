import React from "react";
import { FiSearch, FiGrid, FiCheckCircle, FiFileText } from "react-icons/fi";

const steps = [
  { label: "Spidering", icon: FiSearch, active: true },
  { label: "Mapping", icon: FiGrid },
  { label: "Testing", icon: FiCheckCircle },
  { label: "Validating", icon: FiCheckCircle },
  { label: "Reporting", icon: FiFileText },
];

function Stepper() {
  return (
    <div className="relative w-full">
      <div className="absolute top-5 left-[10%] right-[10%] h-[2px] bg-gray-300 dark:bg-gray-700" />

      <div className="relative flex justify-between items-start">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border
                ${
                  step.active
                    ? "bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-500/30"
                    : "bg-white text-gray-500 border-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600"
                }`}
              >
                <Icon size={16} />
              </div>

              <span className="text-xs mt-2 text-gray-600 dark:text-gray-400 text-center">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;