import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate("/about");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="border-b border-sky-400 py-2">
      <div className="navbar  flex justify-between items-center">
        <div className="flex gap-10">
          <div className=" flex justify-center items-center font-extrabold text-4xl ml-3">
            <img className="h-7 px-3" src="/logo.png" alt="" srcset="" />
          </div>
          <div className="flex gap-5 ml-5 items-center cursor-pointer text-2xl font-normal text-sky-500">
            <div
              className="hover:bg-sky-300 hover:text-white rounded-md p-2"
              onClick={handleHome}
            >
              Home
            </div>
            <div
              className="hover:bg-sky-300 hover:text-white rounded-md p-2"
              onClick={handleAboutUs}
            >
              About Us
            </div>
            <div className="hover:bg-sky-300 hover:text-white rounded-md p-2">
              Contact
            </div>
          </div>
        </div>
        <Button className="mx-2">Sign In</Button>
      </div>
    </nav>
  );
}
