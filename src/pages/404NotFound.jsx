import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      <div className="text-center text-white z-10">
        <h1 className="text-9xl font-extrabold tracking-widest animate-bounce">
          404
        </h1>

        <div className="w-24 h-1 bg-white mx-auto my-6 rounded-full"></div>

        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/dashboard"
          className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg 
          hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out 
          transform hover:scale-110"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
