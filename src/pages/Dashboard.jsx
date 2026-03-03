import React, { useEffect, useState } from "react";
import MainWrapper from "../layouts/MainWrapper.jsx";
import DashboardStatics from "../components/dashboard-component/DashboardStatics.jsx";
import DashboardTable from "../components/dashboard-component/DashboardTable.jsx";
import Skeleton from "../components/common/Skeleton.jsx";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainWrapper>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <DashboardStatics />
          <DashboardTable />
        </>
      )}
    </MainWrapper>
  );
}

export default Dashboard;
