"use client";
import React from "react";
import { useThemeContext } from "../context/theme";

function page() {
  const { nightMode, showMainContent }: any = useThemeContext();

  return (
    <div
      className={`text-black ${
        !showMainContent ? "flex" : "hidden"
      } flex-col h-screen justify-center items-center `}
    >
      <div className=" w-1/3 statistics cursor-pointer shadow-2xl bg-white underline text-blue-950 font-bold h-[95px] border-2 border-black flex flex-col justify-center items-center text-center ">
        <a>სამეწარმეო რეესტრის სტატისტიკა</a>
      </div>
      <div className=" w-1/3 statistics cursor-pointer bg-white underline mt-4 text-blue-950 font-bold h-[95px] border-2 border-black flex flex-col justify-center items-center text-center ">
        <a>უძრავი ქონების რეესტრის სტატისტიკა</a>
      </div>
    </div>
  );
}

export default page;
