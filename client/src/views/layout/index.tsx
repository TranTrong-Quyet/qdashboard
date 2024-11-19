import NavBar from "@/components/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const LayOut = () => {
  return (
    <>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="flex w-full flex-col">
          <NavBar />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};

export default LayOut;
