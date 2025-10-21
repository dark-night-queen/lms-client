"use client";

// code dependencies
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

// core components
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

const chartConfig = {
  visitors: {
    label: "Leaves Stats",
  },
  leavesUsed: {
    label: "Leaves Used",
    color: "var(--chart-3)",
  },
  leavesLeft: {
    label: "Leaves Left",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

// driver code
export const LeaveStats = () => {
  const leavesUsed = 15; // Example days worked
  const totalWorkdays = 22; // Example total workdays in a month

  const chartData = [
    {
      name: "leavesUsed",
      days: leavesUsed,
      fill: "var(--color-leavesUsed)",
    },
    {
      name: "leavesLeft",
      days: totalWorkdays - leavesUsed,
      fill: "var(--color-leavesLeft)",
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-2">
      <p className="text-xl font-semibold self-center">
        Leave Status
      </p>

      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[180px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="days"
              nameKey="name"
              innerRadius={50}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {leavesUsed}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Days
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <div>
        <p className="text-xs">
          Leaves Used:{" "}
          <span className="text-lg">{leavesUsed}</span>
        </p>

        <p className="text-xs">
          Total Leaves Available:{" "}
          <span className="text-lg">{totalWorkdays}</span>
        </p>
      </div>

      <Button>Apply for leave</Button>
    </div>
  );
};
