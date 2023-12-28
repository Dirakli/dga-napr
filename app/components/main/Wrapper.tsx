"use client";
import React from "react";
import { useThemeContext } from "@/app/context/theme";

function Wrapper({ children }: any) {
  const { nightMode }: any = useThemeContext();
  return (
    <main
      className={`${
        nightMode ? "bg-gray-300" : "bg-neutral-900"
      }  min-h-screen w-full flex flex-col justify-between background-dots`}
    >
      {children}
    </main>
  );
}

export default Wrapper;
