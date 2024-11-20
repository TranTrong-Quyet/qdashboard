import React from "react";
import profileImage from "../assets/profile-img.png";

import { ModeToggle } from "./mode-toggle";
import { SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { ChevronUp, Search, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const NavBar = ({ user }) => {
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
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <img
                  src={profileImage}
                  alt="avatar"
                  className="w-7 h-7 object-cover rounded"
                />
                <div className="flex flex-col ">
                  <span>{user.name}</span>
                  <div>{user.occupation}</div>
                </div>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
