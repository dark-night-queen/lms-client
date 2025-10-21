import React from "react";
import { Calendar } from "../_components/calendar";

const CalendarPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8">
      <Calendar className="col-span-1 md:col-span-3 w-full pr-8" />

      <div className="col-span-1 md:col-start-4 bg-tertiary-foreground rounded-xl p-4 lg:p-8">
        Work in progress
        <p>Will include the holidays, start time and end time</p>
        <p>
          Maybe shown to admin only, can view all their peers start and end +
          leaves
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
