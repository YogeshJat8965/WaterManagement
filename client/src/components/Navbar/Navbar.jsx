import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="navbar border-b flex bg-orange-500 py-2 justify-between">
      <div className="font-extrabold text-2xl ml-3">
        <h2>Logo</h2>
      </div>
      <div className="flex gap-5 ml-5 items-center font-bold">
        <div>Home</div>
        <div>About Me</div>
        <div>Contact</div>
      </div>
      <Button className="mx-2">Sign In</Button>
    </nav>
  );
}
