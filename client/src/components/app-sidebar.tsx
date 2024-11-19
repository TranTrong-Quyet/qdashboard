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
    groupTitle: "Client Facing",
    groupItems: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        icon: Search,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
    ],
  },
  {
    groupTitle: "Sales",
    groupItems: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        icon: Search,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
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
            <SidebarGroupLabel>{group.groupTitle}</SidebarGroupLabel>
            <SidebarGroupContent>
              {group.groupItems.map((item) => (
                <SidebarMenuItem className="list-none" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
