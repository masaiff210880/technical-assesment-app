import React from "react";
import { FaApple, FaGoogle, FaMeta } from "react-icons/fa6";

function SocialAuthIcons() {
  return (
    <div className="mt-6 flex justify-between gap-4">
      <button
        className="
          w-24 h-11
          flex items-center justify-center
          rounded-full
          bg-black text-white
          hover:opacity-90
          transition
        "
      >
        <FaApple size={18} />
      </button>

      <button
        className="
          w-24 h-11
          flex items-center justify-center
          rounded-full
          bg-gray-100 text-gray-700
          hover:bg-gray-200
          transition
        "
      >
        <FaGoogle size={18} />
      </button>

      <button
        className="
          w-24 h-11
          flex items-center justify-center
          rounded-full
          bg-blue-600 text-white
          hover:bg-blue-700
          transition
        "
      >
        <FaMeta size={18} />
      </button>
    </div>
  );
}

export default SocialAuthIcons;
