import React from "react";
import SocialAuthIcons from "./SocialAuthIcons";
import { useNavigate } from "react-router-dom";

function AuthCard() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-lg px-5 py-6">
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Sign up
      </h2>

      <p className="text-xs text-center text-gray-500 mt-1">
        Already have an account?{" "}
        <span className="text-teal-500 cursor-pointer hover:underline">
          Log in
        </span>
      </p>

      <form className="mt-5 space-y-3">
        <input
          type="text"
          placeholder="First name*"
          className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />

        <input
          type="text"
          placeholder="Last name*"
          className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />

        <input
          type="email"
          placeholder="Email address*"
          className="w-full h-10 px-3 rounded-lg border border-gray-200 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password (8+ characters)*"
            className="w-full h-10 px-3 pr-9 rounded-lg border border-gray-200 text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer text-sm">
            👁
          </span>
        </div>

        <label className="flex gap-2 text-[11px] text-gray-600 leading-snug">
          <input type="checkbox" className="mt-1" />
          <span>
            I agree to Aps’s{" "}
            <span className="text-teal-500 cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-teal-500 cursor-pointer">Privacy Policy</span>
          </span>
        </label>

        <button
          type="submit"
          onClick={handleClick}
          className="w-full h-10 mt-1 rounded-full bg-teal-500 text-white text-xs font-medium hover:bg-teal-600 transition"
        >
          Create account
        </button>
      </form>

      <div className="mt-4">
        <SocialAuthIcons />
      </div>
    </div>
  );
}

export default AuthCard;
