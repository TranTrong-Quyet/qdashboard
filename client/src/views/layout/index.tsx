import NavBar from "@/components/NavBar";
import React, { useId, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { useGetUserQuery } from "@/store/api";
import { useSelector } from "react-redux";

const LayOut = () => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar user={data || {}} />
        <main className="flex w-full flex-col">
          <NavBar user={data || {}} />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};

export default LayOut;
