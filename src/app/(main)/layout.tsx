"use client";

// code dependencies
import React from "react";

// core components
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

// custom components
import { Sidebar } from "./_components/sidebar";
import { SiteHeader } from "./_components/site-header";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <Sidebar />

      <SidebarInset>
        <div className="sticky top-0 z-10 bg-background">
          <SiteHeader />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
