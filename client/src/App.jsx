import { PieCharts} from"./components/ui/PieCharts";
import "./App.css";
// import { Component } from "./components/Linegraph";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
// import { PieChart } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PieCharts></PieCharts>
    </>
  );
}

export default App;
