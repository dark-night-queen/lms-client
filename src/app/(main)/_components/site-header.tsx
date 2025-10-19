// code dependencies
import React, { useState } from "react";
import moment, { Moment } from "moment";
import { usePathname } from "next/navigation";

// core components
import { Sun } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

// constants
import { getRouteNameFromPathname } from "../constants";

// driver code
export const SiteHeader = () => {
  const pathname = usePathname();
  const title = getRouteNameFromPathname(pathname) || "Unknown";

  const [currentDateTime, setCurrentDateTime] = useState<Moment>(moment());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />

        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-base font-medium">{title}</h1>

        <div className="ml-auto flex items-center gap-2">
          <Sun className="h-4 w-4 text-yellow-500" />
          <p className="text-sm">{currentDateTime.format("ddd DD-MM-YY")}</p>
          <Separator
            orientation="vertical"
            className="mx-1 data-[orientation=vertical]:h-4 bg-accent-foreground/50"
          />
          <p className="text-sm">{currentDateTime.format("hh:mm A")}</p>
        </div>
      </div>
    </header>
  );
};
