import React from "react";
import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const DashBoard = () => {
  return (
    <div className="w-full h-screen">
      DASHBOARD
      <Outlet />
    </div>
  );
};

export default DashBoard;
