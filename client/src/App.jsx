import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WardBarChart from "./components/ui/WardBarChart";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WardBarChart></WardBarChart>
    </>
  );
}

export default App;
