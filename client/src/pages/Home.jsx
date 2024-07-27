import Component from "@/components/BarChart";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { format, subDays } from "date-fns";
import { PieCharts } from "../components/ui/PieCharts";
import LeakageComponent from "@/components/LeakageComponent";
import WardBarChart from "@/components/ui/WardBarChart";

const generateDummyData = () => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const date = subDays(today, i);
    const value = Math.floor(Math.random() * 100); // Generate random water consumption value
    data.push({ date, value });
  }
  return data.reverse(); // To get chronological order
};

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyData = generateDummyData();
    setData(dummyData);
  }, []);

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
      <div className="shadow-md">
        <Component> </Component>
      </div>

      <LeakageComponent />

      <PieCharts></PieCharts>

      <div className="flex flex-col gap-4 justify-center items-center p-4 border rounded-lg shadow-md">
        <GaugeChart
          className="w-24"
          id="gauge-chart1"
          textColor="black"
          // percent={percent} get percent through the api
        ></GaugeChart>
        <div className="font-black text-2xl ">Daily Water Utilization</div>
      </div>
      <div className="col-span-2">
        <WardBarChart></WardBarChart>
      </div>
      <div className="border-2">
        <iframe
          src="https://yugal1107-classifier-model.hf.space"
          frameborder="0"
          width="850"
          height="450"
        ></iframe>
      </div>
    </div>
  );
}
