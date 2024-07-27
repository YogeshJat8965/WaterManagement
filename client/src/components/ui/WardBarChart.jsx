"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
    { ward: "Ward 1", waterConsumption: 1250 },
    { ward: "Ward 2", waterConsumption: 1340 },
    { ward: "Ward 3", waterConsumption: 1450 },
    { ward: "Ward 4", waterConsumption: 1100 },
    { ward: "Ward 5", waterConsumption: 1380 },
    { ward: "Ward 6", waterConsumption: 1270 },
    { ward: "Ward 7", waterConsumption: 1180 },
    { ward: "Ward 8", waterConsumption: 1300 },
    { ward: "Ward 9", waterConsumption: 1220 },
    { ward: "Ward 10", waterConsumption: 1400 },
    { ward: "Ward 11", waterConsumption: 1350 },
    { ward: "Ward 12", waterConsumption: 1200 },
    { ward: "Ward 13", waterConsumption: 1450 },
    { ward: "Ward 14", waterConsumption: 1500 },
    { ward: "Ward 15", waterConsumption: 1350 },
    { ward: "Ward 16", waterConsumption: 1400 },
    { ward: "Ward 17", waterConsumption: 1280 },
    { ward: "Ward 18", waterConsumption: 1320 },
    { ward: "Ward 19", waterConsumption: 1260 },
    { ward: "Ward 20", waterConsumption: 1370 },
    { ward: "Ward 21", waterConsumption: 1330 },
    { ward: "Ward 22", waterConsumption: 1290 },
    { ward: "Ward 23", waterConsumption: 1410 },
    { ward: "Ward 24", waterConsumption: 1460 },
    { ward: "Ward 25", waterConsumption: 1420 },
    { ward: "Ward 26", waterConsumption: 1380 },
    { ward: "Ward 27", waterConsumption: 1440 },
    { ward: "Ward 28", waterConsumption: 1300 },
    { ward: "Ward 29", waterConsumption: 1270 },
    { ward: "Ward 30", waterConsumption: 1430 },
  ];

const chartConfig = {
  waterConsumption: {
    label: "Water Consumption (L)",
  },
};

export default function WardBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ward Water Consumption</CardTitle>
        <CardDescription>Daily Water Consumption in Indore City</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} style={{ width: '100%', height: '400px' }}>
          <BarChart
            data={chartData}
            layout="horizontal"
            margin={{ left: 50, right: 50, top: 10, bottom: 20 }}
            width={600}
            height={300}
          >
            <XAxis
              dataKey="ward"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis dataKey="waterConsumption" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="waterConsumption"
              layout="vertical"
              radius={5}
              fill="url(#coolBlueGreenGradient)" // Apply gradient fill
            />
            <defs>
              <linearGradient id="coolBlueGreenGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4A90E2" stopOpacity={1} />
                <stop offset="100%" stopColor="#50E3C2" stopOpacity={1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing daily water consumption per ward in Indore city
        </div>
      </CardFooter>
    </Card>
  );
}

// const chartData = [
//   { ward: "Ward 1", waterConsumption: 1250 },
//   { ward: "Ward 2", waterConsumption: 1340 },
//   { ward: "Ward 3", waterConsumption: 1450 },
//   { ward: "Ward 4", waterConsumption: 1100 },
//   { ward: "Ward 5", waterConsumption: 1380 },
//   { ward: "Ward 6", waterConsumption: 1270 },
//   { ward: "Ward 7", waterConsumption: 1180 },
//   { ward: "Ward 8", waterConsumption: 1300 },
//   { ward: "Ward 9", waterConsumption: 1220 },
//   { ward: "Ward 10", waterConsumption: 1400 },
//   { ward: "Ward 11", waterConsumption: 1350 },
//   { ward: "Ward 12", waterConsumption: 1200 },
//   { ward: "Ward 13", waterConsumption: 1450 },
//   { ward: "Ward 14", waterConsumption: 1500 },
//   { ward: "Ward 15", waterConsumption: 1350 },
//   { ward: "Ward 16", waterConsumption: 1400 },
//   { ward: "Ward 17", waterConsumption: 1280 },
//   { ward: "Ward 18", waterConsumption: 1320 },
//   { ward: "Ward 19", waterConsumption: 1260 },
//   { ward: "Ward 20", waterConsumption: 1370 },
//   { ward: "Ward 21", waterConsumption: 1330 },
//   { ward: "Ward 22", waterConsumption: 1290 },
//   { ward: "Ward 23", waterConsumption: 1410 },
//   { ward: "Ward 24", waterConsumption: 1460 },
//   { ward: "Ward 25", waterConsumption: 1420 },
//   { ward: "Ward 26", waterConsumption: 1380 },
//   { ward: "Ward 27", waterConsumption: 1440 },
//   { ward: "Ward 28", waterConsumption: 1300 },
//   { ward: "Ward 29", waterConsumption: 1270 },
//   { ward: "Ward 30", waterConsumption: 1430 },
// ];