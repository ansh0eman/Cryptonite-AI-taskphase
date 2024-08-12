import React from "react";
import gif1 from "../assets/chipichipi.gif";
import gif2 from "../assets/dababy.gif";

export default function Success() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-6xl">Well done! You found the flag!!</div>
        <div className="flex justify-center items-center p-2">
          <img src={gif1} alt="chipi" />
          <img src={gif2} alt="dababy" />
        </div>
      </div>
    </>
  );
}
