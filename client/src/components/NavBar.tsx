import React from "react";

import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, Settings } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex w-full flex-row max-h-20 items-center justify-between p-4 border-b">
      {/* LEFT */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger size="default" />
        <div className="flex flex-row items-center space-x-1">
          <Input placeholder="Search..." />
          <Button type="submit">
            <Search />
          </Button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex space-x-4 items-center">
        <ModeToggle />
        <Settings />
      </div>
    </div>
  );
};

export default NavBar;
