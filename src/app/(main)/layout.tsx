// code dependencies
import React from "react";

// core components
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

// custom components
import { Sidebar } from "./_components/sidebar";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <SidebarProvider>
      <Sidebar />

      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
