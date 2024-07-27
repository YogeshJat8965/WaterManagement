import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Navbar/AboutUs";
import ClusterPage from "./pages/ClusterPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cluster" element={<ClusterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
