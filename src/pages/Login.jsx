import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import LeftHero from "../components/common/login-components/LeftHero";
import AuthCard from "../components/common/login-components/AuthCard";

function Login() {
  return (
    <AuthLayout>
      <div className="
        w-full max-w-6xl
        hidden lg:flex
        items-center
        justify-between
        px-6
      ">
        <LeftHero />
        <AuthCard />
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-center px-4">
        <AuthCard />
      </div>
    </AuthLayout>
  );
}

export default Login;