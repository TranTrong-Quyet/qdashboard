import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" p-4">
        <div className="text-xl font-bold font-serif">
          <Link to={"/dashboard"}>Q Dashboard</Link>
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
    </Sidebar>
  );
}
