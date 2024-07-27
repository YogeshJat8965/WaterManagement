import "./App.css";
import { PieCharts } from "./components/ui/PieCharts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WardBarChart from "./components/ui/WardBarChart";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PieCharts></PieCharts>
      <WardBarChart></WardBarChart>
    </>
  );
}

export default App;
