import Component from "@/components/BarChart";
import GaugeChart from "react-gauge-chart";
import { PieCharts } from "../components/ui/PieCharts";
import LeakageComponent from "@/components/LeakageComponent";
import WardBarChart from "@/components/ui/WardBarChart";
import WaterLeakageDashboard from "@/components/WaterLeakageDashboard";
import { Separator } from "@/components/ui/separator";
import { SimpleFooter } from "@/components/Footer";

export default function Home() {
  return (
    // <div className="p-5 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
    <div className="p-5 gap-4">
      <div className=" h-dvh p-3 flex gap-0 justify-around basis-1/2 flex-wrap">
        <div className="basis-1/2">
          <Component> </Component>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center basis-1/2">
          <h1 className="text-6xl text-sky-500 font-light">
            {" "}
            Gain Insights with Monthly Consumption Analysis{" "}
          </h1>
          <div className="p-5 pr-10 text-lg">
            This bar chart provides a detailed analysis of the monthly water
            consumption across the entire city. By visualizing the total water
            usage for each month, it highlights patterns and trends in water
            consumption over time. This information is crucial for identifying
            seasonal variations, planning resource allocation, and ensuring
            efficient water management. Understanding monthly consumption helps
            in anticipating demand, preparing for peak usage periods, and
            implementing effective conservation strategies to sustain water
            resources for the future.
          </div>
        </div>
      </div>
      <Separator></Separator>

      {/* <div className="p-3 flex gap-0 justify-around basis-1/2">
      <WaterLeakageDashboard />
      </div> */}

      <Separator></Separator>

      <div className="p-3 flex gap-0 justify-around basis-1/2 flex-wrap">
        <div>
          <PieCharts></PieCharts>
        </div>
        <div>
          <LeakageComponent />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center p-4">
          <GaugeChart
            className="w-24"
            id="gauge-chart1"
            textColor="black"
            // percent={percent} get percent through the api
          ></GaugeChart>
          <div className="text-2xl ">Daily Water Utilization</div>
        </div>
      </div>

      <Separator></Separator>
      {/* <WaterLeakageDashboard /> */}

      <div className="">
        <WardBarChart></WardBarChart>
      </div>
      <SimpleFooter />
    </div>
  );
}
