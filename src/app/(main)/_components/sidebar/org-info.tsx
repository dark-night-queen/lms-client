"use client";

// code dependencies
import * as React from "react";

// core components
import { Sprout } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

// driver code
interface OrgInfoProps {
  orgName: string;
  orgPlan: string;
}

export const OrgInfo = ({ orgName, orgPlan = "Basic" }: OrgInfoProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-green-700 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Sprout className="size-4" />
          </div>

          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Leaf</span>
            <span className="truncate text-xs">{orgName}</span>
          </div>

          <Badge asChild className="ml-auto bg-amber-600">
            <span className="truncate text-xs">{orgPlan}</span>
          </Badge>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
