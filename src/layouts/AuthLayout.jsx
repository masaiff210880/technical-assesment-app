import React from "react";

function AuthLayout({ children }) {
    return (
        <div
            className="
        relative min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#3b1d4a]
        dark:from-black dark:via-gray-900 dark:to-gray-950
      "
        >

            <div className="absolute top-6 left-6 z-20 flex items-center gap-2">


                <div className="w-4 h-4 rounded-full border-2 border-teal-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                </div>


                <span className="text-base font-semibold tracking-tight text-white">
                    aps
                </span>
            </div>

            <div className="w-full px-4">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;