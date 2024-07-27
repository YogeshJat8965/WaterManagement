import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Navbar/AboutUs";

function App() {
  return (
    <>
     <Router>
     <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
     
     
     </Router>
    </>
  );
}

export default App;
