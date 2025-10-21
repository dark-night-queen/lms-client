// code dependencies
import React, { useState } from "react";
import moment, { Moment } from "moment";
import { usePathname } from "next/navigation";

// core components
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ToggleTheme } from "@/components/core/toggle-theme";

// constants
import { getRouteNameFromPathname } from "../constants";

// driver code
export const SiteHeader = () => {
  const pathname = usePathname();
  const title = getRouteNameFromPathname(pathname) || "Unknown";

  const [currentDateTime, setCurrentDateTime] = useState<Moment>(moment());
  const currentDate = currentDateTime.format("ddd DD-MM-YY");
  const currentTime = currentDateTime.format("hh:mm A");

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
          className="md:mx-2 data-[orientation=vertical]:h-4"
        />

        <h1 className="text-sm md:text-base font-medium">{title}</h1>

        <div className="ml-auto flex items-center gap-2">
          <ToggleTheme />
          <p className="text-xs md:text-sm">{currentDate}</p>
          <Separator
            orientation="vertical"
            className="md:mx-1 data-[orientation=vertical]:h-4 bg-accent-foreground/50"
          />
          <p className="text-xs md:text-sm">{currentTime}</p>
        </div>
      </div>
    </header>
  );
};
