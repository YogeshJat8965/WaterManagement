import "./App.css";
import { Component } from "./components/Linegraph";
import Navbar from "./components/Navbar/Navbar";
// import { Linegraph } from "./components/Linegraph";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navbar />
      <Component></Component>
    </>
  );
}

export default App;
