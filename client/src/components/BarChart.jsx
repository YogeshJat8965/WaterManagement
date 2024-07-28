import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
  { month: "January", consumption: 10080, mobile: 10080 },
  { month: "February", consumption: 10200, mobile: 10200 },
  { month: "March", consumption: 11120, mobile: 11120 },
  { month: "April", consumption: 12190, mobile: 12190 },
  { month: "May", consumption: 14890, mobile: 13890 },
  { month: "June", consumption: 13140, mobile: 13140 },
  { month: "July", consumption: 12140, mobile: 12140 },
];

const chartConfig = {
  consumption: {
    label: "consumption",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Consumption(in million)",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
};

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Consumption by Month</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="consumption" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="consumption"
              layout="vertical"
              fill="var(--color-consumption)"
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="consumption"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Showing Monthly Water Consumption in MLD{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing consumption for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
