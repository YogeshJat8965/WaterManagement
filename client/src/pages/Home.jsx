import Component from "@/components/BarChart";
import GaugeChart from "react-gauge-chart";
// import { format, subDays } from "date-fns";
import { PieCharts } from "../components/ui/PieCharts";
import LeakageComponent from "@/components/LeakageComponent";
import WardBarChart from "@/components/ui/WardBarChart";
import WaterLeakageDashboard from "@/components/WaterLeakageDashboard";


export default function Home() {

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">
      <div className="shadow-md">
        <Component> </Component>
      </div>
      <WaterLeakageDashboard />
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
      
    </div>
  );
}
