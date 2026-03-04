import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Projects from "./pages/Projects.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Scan from "./pages/Scan.jsx";
import Support from "./pages/Support.jsx";
import Settings from "./pages/Settings.jsx";
import Shedule from "./pages/Shedule.jsx";
import Notifications from "./pages/Notification.jsx";
import NotFound from "./pages/404NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/schedule" element={<Shedule />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
