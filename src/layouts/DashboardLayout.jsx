import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";

function DashboardLayout() {
  const location = useLocation();

  const breadcrumbConfig = {
    "/dashboard": [{ label: "Dashboard", to: "/dashboard" }],
    "/projects": [{ label: "Projects", to: "/projects" }],
  };

  const breadcrumbItems = breadcrumbConfig[location.pathname] || [];

  return (
    <div className="flex min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header
          breadcrumbItems={breadcrumbItems}
          rightButtons={[
            { label: "Export Report" },
            { label: "Stop Scan", variant: "danger" },
          ]}
        />
        <main className="flex-1 bg-slate-50 p-2 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

