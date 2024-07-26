import "./App.css";
import { Component } from "./components/Linegraph";
import GaugeChart from "react-gauge-chart";
// import { Percent } from "api"; fetch api and use the value of water utilised today

function App() {
  return (
    <>
      <Component></Component>
      <div className="gauge-container"  >
        <GaugeChart id="gauge-chart1" 
          textColor="black"
          // percent={percent} get percent through the api
          ></GaugeChart>
          <div className='font-black text-2xl ' >Water Utilisation Today</div>

      </div>
        
    </>
  );
}

export default App;
