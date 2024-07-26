import "./App.css";
// import { Component } from "./components/Linegraph";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import GaugeChart from "react-gauge-chart";

function App() {
  return (
    <>
    <Navbar />
    <Home />
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
