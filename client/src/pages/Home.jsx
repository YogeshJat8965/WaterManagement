import Component from "@/components/BarChart";
import React, { useEffect } from "react";
import GaugeChart from "react-gauge-chart";

export default function Home() {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="shadow-md border">
        <Component> </Component>
      </div>
      <div className="hidden md:block"></div>
      <div className="flex flex-col gap-4 justify-center items-center border rounded-lg shadow-md">
        <GaugeChart
          id="gauge-chart1"
          textColor="black"
          // percent={percent} get percent through the api
        ></GaugeChart>
        <div className="font-black text-2xl ">Water Utilisation Today</div>
      </div>
    </div>
  );
}
{
  /* <div className="gauge-container"  ></div> */
}
