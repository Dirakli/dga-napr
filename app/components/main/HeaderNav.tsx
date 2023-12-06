"use client";
import React from "react";
import { useThemeContext } from "../../context/theme";
import Link from "next/link";

function HeaderNav() {
  const { setSidebar, moreInfo, sidebar, setId, nightMode }: any =
    useThemeContext();

  function SidebarFunc(e: any) {
    e(false);
  }

  return (
    <div
      className={`${nightMode ? "text-custom-light-blue" : "text-white"} flex ${
        sidebar ? "min-w-[550px]" : ""
      } justify-between `}
    >
      <Link
        onClick={() => {
          SidebarFunc(setSidebar);
          setId(4);
        }}
        href="/about"
      >
        <p
          className={` text-sm ${
            nightMode ? "text-custom-light-blue" : "text-white"
          } cursor-pointer rounded-sm p-1 ${
            nightMode ? "hover:bg-white" : "hover:bg-custom-blue"
          } font-bold`}
        >
          სააგენტოს შესახებ
        </p>
      </Link>
      <Link
        onClick={() => {
          SidebarFunc(setSidebar);
          setId(4);
        }}
        href="/public"
      >
        <p
          className={` text-sm ${
            nightMode ? "text-custom-light-blue" : "text-white"
          } cursor-pointer rounded-sm p-1 ${
            nightMode ? "hover:bg-white" : "hover:bg-custom-blue"
          } font-bold`}
        >
          საჯარო ინფორმაცია
        </p>
      </Link>
      <Link
        onClick={() => {
          SidebarFunc(setSidebar);
          setId(4);
        }}
        href="/statistics"
      >
        <p
          className={`${
            nightMode ? "hover:bg-white" : "hover:bg-custom-blue"
          }  ${
            nightMode ? "text-custom-light-blue" : "text-white"
          } text-sm font-bold ${
            window.location.pathname === "/statistics" ||
            window.location.pathname === "/required" ||
            window.location.pathname === "/public" ||
            window.location.pathname === "/about"
              ? "hidden"
              : ""
          } cursor-pointer rounded-sm p-1`}
        >
          სტატისტიკა
        </p>
      </Link>
      <Link
        onClick={() => {
          SidebarFunc(setSidebar);
          setId(4);
        }}
        href="/required"
      >
        <p
          className={` text-sm ${
            nightMode ? "text-custom-light-blue" : "text-white"
          } cursor-pointer rounded-sm p-1 ${
            nightMode ? "hover:bg-white" : "hover:bg-custom-blue"
          } font-bold`}
        >
          საჭირო ინფორმაცია
        </p>
      </Link>
    </div>
  );
}

export default HeaderNav;
