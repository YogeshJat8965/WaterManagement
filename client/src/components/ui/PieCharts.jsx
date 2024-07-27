"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "agriculture", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "resedential", visitors: 200, fill: "var(--color-safari)" },
  { browser: "industrial", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "educational", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
 
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function PieCharts() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return React.createElement(
    Card,
    { className: "flex flex-col" },
    React.createElement(
      CardHeader,
      { className: "items-center pb-0" },
      React.createElement(CardTitle, null, "Pie Chart - Donut with Text"),
      React.createElement(CardDescription, null, "January - June 2024")
    ),
    React.createElement(
      CardContent,
      { className: "flex-1 pb-0" },
      React.createElement(
        ChartContainer,
        {
          config: chartConfig,
          className: "mx-auto aspect-square max-h-[250px]",
        },
        React.createElement(
          PieChart,
          null,
          React.createElement(ChartTooltip, {
            cursor: false,
            content: React.createElement(ChartTooltipContent, {
              hideLabel: true,
            }),
          }),
          React.createElement(
            Pie,
            {
              data: chartData,
              dataKey: "visitors",
              nameKey: "browser",
              innerRadius: 60,
              strokeWidth: 5,
            },
            React.createElement(Label, {
              content: ({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return React.createElement(
                    "text",
                    {
                      x: viewBox.cx,
                      y: viewBox.cy,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                    },
                    React.createElement(
                      "tspan",
                      {
                        x: viewBox.cx,
                        y: viewBox.cy,
                        className: "fill-foreground text-3xl font-bold",
                      },
                      totalVisitors.toLocaleString()
                    ),
                    React.createElement(
                      "tspan",
                      {
                        x: viewBox.cx,
                        y: (viewBox.cy || 0) + 24,
                        className: "fill-muted-foreground",
                      },
                      "Visitors"
                    )
                  );
                }
                return null;
              },
            })
          )
        )
      )
    ),
    React.createElement(
      CardFooter,
      { className: "flex-col gap-2 text-sm" },
      React.createElement(
        "div",
        { className: "flex items-center gap-2 font-medium leading-none" },
        "Trending up by 5.2% this month ",
        React.createElement(TrendingUp, { className: "h-4 w-4" })
      ),
      React.createElement(
        "div",
        { className: "leading-none text-muted-foreground" },
        "Showing total visitors for the last 6 months"
      )
    )
  );
}
