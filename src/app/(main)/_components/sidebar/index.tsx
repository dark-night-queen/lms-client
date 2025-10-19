"use client";

// code dependencies
import React from "react";

// core components
import {
  Sidebar as BaseSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// custom components
import { OrgInfo } from "./org-info";
import { NavUser } from "./nav-user";
import { NavContent, NavContentWithLabel } from "./nav-content";

// constants
import { NavItems, NavFooterItems, NavToolItems } from "./constants";

// driver code
export const Sidebar = () => {
  const user = {
    name: "Charlotte Nguyen",
    email: "c.nguyen@leaf.com",
    avatar: "https://i.pravatar.cc/150?u=charlotteness",
  };

  return (
    <BaseSidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <OrgInfo orgName="Acme.co" orgPlan="Pro" />
      </SidebarHeader>

      <SidebarContent>
        <NavContent items={NavItems} />
        <NavContentWithLabel label={"Tools"} items={NavToolItems} />
        <NavContent items={NavFooterItems} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </BaseSidebar>
  );
};
