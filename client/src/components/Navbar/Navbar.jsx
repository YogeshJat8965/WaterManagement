import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()

 const handleAboutUs = () => {
    navigate("/about");
  }

  const handleHome = () => {
    navigate("/");
  }

  

  return (
    <nav className="border-b bg-sky-500 py-2">
      <div className="navbar  flex justify-between items-center">
        <div className="font-extrabold text-4xl ml-3">
          <h2>Logo</h2>
        </div>
        <div className="flex gap-5 ml-5 items-center font-bold cursor-pointer ">
          <div onClick={handleHome}>Home</div>
          <div onClick={handleAboutUs}>About Me</div>
          <div>Contact</div>
        </div>
        <Button className="mx-2">Sign In</Button>
      </div>
    </nav>
  );
}
