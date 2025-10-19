"use client";

// code dependencies
import * as React from "react";

// core components
import { Calendar as BaseCalendar } from "@/components/ui/calendar";

// driver code
export const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xl font-semibold text-green-950">Calendar</p>

      <BaseCalendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md w-full"
        captionLayout="label"
      />
    </div>
  );
};
