import React from "react";
import DescriptionBox from "./DescriptionBox";
import topsecBg from '../assets/topsec-bg2.jpg';

export default function TopSection() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-64 w-full bg-white"
        style={{ backgroundImage: `url(${topsecBg})` }}
      >
        <div className="flex justify-center items-center">
          <DescriptionBox />
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full h-[0.5rem] from-white/50 to-transparent backdrop-blur-sm"></div> */}
      </div>
    </>
  );
}
