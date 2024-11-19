import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const NavBar = () => {
  return (
    <div className="flex w-full flex-row max-h-20 items-center justify-between p-4 border-b">
      <div>
        {" "}
        <SidebarTrigger size="default" />
      </div>
      <div>right</div>
    </div>
  );
};

export default NavBar;
