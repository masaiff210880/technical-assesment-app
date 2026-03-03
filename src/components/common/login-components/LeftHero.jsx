import React from "react";
import { FaCheck } from "react-icons/fa";

function LeftHero() {
  return (
    <div className="hidden lg:flex flex-col justify-center max-w-xl text-white">
      <h1 className="text-[42px] font-semibold leading-tight">
        Expert level Cybersecurity
        <br />
        in <span className="text-teal-400 font-semibold">hours</span> not weeks.
      </h1>

      <h3 className="mt-10 text-sm font-medium text-gray-300">
        What’s included
      </h3>

      <ul className="mt-4 space-y-4 text-sm text-gray-300">
        <li className="flex gap-3">
          <FaCheck size={14} className="text-green-500 mt-1" />
          <span>
            Effortlessly spider and map targets to uncover hidden security flaws
          </span>
        </li>

        <li className="flex gap-3">
          <FaCheck size={14} className="text-green-500 mt-1" />
          <span>
            Deliver high-quality, validated findings in hours, not weeks.
          </span>
        </li>

        <li className="flex gap-3">
          <FaCheck size={14} className="text-green-500 mt-1" />
          <span>
            Generate professional, enterprise-grade security reports
            automatically.
          </span>
        </li>
      </ul>

      <div className="mt-12">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span className="text-green-400">★</span>
          <span className="font-medium">Trustpilot</span>
        </div>

        <div className="mt-1 text-sm text-gray-300">
          <span className="font-semibold text-white">Rated 4.5/5.0</span>{" "}
          <span className="text-gray-400">(100k+ reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default LeftHero;
