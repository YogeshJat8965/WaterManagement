import { Separator } from "@radix-ui/react-separator";
import React from "react";

export default function LeakageComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mt-2 mx-2 p-1 font-semibold flex items-center gap-4">
        <span className="text-5xl font-extrabold text-red-500">4</span>{" "}
        Potential issues found{" "}
      </h1>
      <span className="text-md">in various places of Indore</span>
      <div className="rounded-t-2xl rounded-b-md p-2 w-full h-full">
        <div className="bg-blue-100 rounded-lg p-2 m-2">
          Leakage Found in{" "}
          <span className="font-bold text-blue-500">Sukhliya</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-2 m-2">
          Leakage Found in{" "}
          <span className="font-bold text-blue-500">Musakhedi</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-2 m-2">
          Leakage Found in{" "}
          <span className="font-bold text-blue-500">Palasia</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-2 m-2">
          Leakage Found in{" "}
          <span className="font-bold text-blue-500">Bengali Square</span>
        </div>
      </div>
    </div>
  );
}
