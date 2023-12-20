import React from "react";
import DashboardNav from "../component/Dashboard/dashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-white min-h-screen grid grid-cols-12 text-gray-700">
      <div className="col-span-2">

        <DashboardNav />
      </div>
      <div className="col-span-10 lg:px-20 lg:mt-10">
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default DashboardLayout;
