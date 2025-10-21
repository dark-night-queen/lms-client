"use client";

// code dependencies
import React from "react";

// core components
import { Calendar as BaseCalendar } from "@/components/ui/calendar";

// driver code
interface CalendarProps {
  className?: string;
}

export const Calendar = ({ className, ...props }: CalendarProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <BaseCalendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={`rounded-md w-full p-0 ${className}`}
      captionLayout="label"
      showOutsideDays={false}
      {...props}
    />
  );
};
