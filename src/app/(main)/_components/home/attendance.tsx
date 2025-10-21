// code dependencies
import React from "react";

// core components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// driver code
export const Attendance = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xl font-semibold">Attendance</p>

      <Card className="bg-accent-foreground/20 border-0 w-full p-0">
        <CardContent className="flex p-4 justify-between">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Punch In</p>
            <p className="text-xl">00:00</p>
          </div>

          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-13"
          />

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs">Punch Out</p>
            <p className="text-xl">00:00</p>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full">Punch In</Button>
    </div>
  );
};
