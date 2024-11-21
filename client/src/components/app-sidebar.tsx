import {
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile-img.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { profile } from "console";

// Menu items.
const items = [
  {
    groupTitle: null,
    groupItems: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
      },
    ],
  },
  {
    groupTitle: "Client Facing",
    groupItems: [
      {
        title: "Products",
        url: "/product",
        icon: Home,
      },
      {
        title: "Customers",
        url: "customers",
        icon: Inbox,
      },
      {
        title: "Transactions",
        url: "transactions",
        icon: Calendar,
      },
      {
        title: "Geography",
        url: "geography",
        icon: Search,
      },
    ],
  },
  {
    groupTitle: "Sales",
    groupItems: [
      {
        title: "Overview",
        url: "overview",
        icon: Home,
      },
      {
        title: "Daily",
        url: "daily",
        icon: Inbox,
      },
      {
        title: "Monthly",
        url: "monthly",
        icon: Calendar,
      },
      {
        title: "Breakdown",
        url: "breakdown",
        icon: Search,
      },
    ],
  },
  {
    groupTitle: "Management",
    groupItems: [
      {
        title: "Admin",
        url: "admin",
        icon: Home,
      },
      {
        title: "Performance",
        url: "performance",
        icon: Inbox,
      },
    ],
  },
];

export function AppSidebar({ user }) {
  const { state } = useSidebar();
  console.log(`this is sidebar state ${state}`); // => expanded || collapsed

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className=" p-4">
        <div className="text-xl font-bold font-serif">
          <Link to={"/dashboard"}>
            <span>Q</span>
            {state === "expanded" && <span> Dashboard</span>}
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {items.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex}>
            <SidebarGroupLabel className="">
              {group.groupTitle}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              {group.groupItems.map((item) => (
                <SidebarMenuItem className="list-none" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="h-14" asChild>
                <SidebarMenuButton>
                  <img
                    src={profileImage}
                    alt="avatar"
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex flex-col gap-1">
                    <span>{user.name}</span>
                    <div>{user.email}</div>
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
