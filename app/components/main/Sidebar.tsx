"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../context/theme";
import Link from "next/link";

function Sidebar() {
  const { sidebar, setSidebar, ChangeFunc, setId, nightMode }: any =
    useThemeContext();
  const [isAccordion, setIsAccordion] = useState<boolean>(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        sidebarRef.current &&
        !(sidebarRef.current as any).contains(event.target)
      ) {
        const ClickedElementId = parseInt(event.target.id, 10);
        if (ClickedElementId !== 123) {
          setSidebar(false);
          console.log("clicked on body", sidebar);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [setSidebar]);

  function SidebarFunc(e: any) {
    e(false);
  }

  function Toggle(setItem: any, item: any) {
    setItem(!item);
  }

  return (
    <div
      ref={sidebarRef}
      className={` z-[500] transition-transform duration-300 ease-in-out transform ${
        sidebar ? "translate-x-0" : "-translate-x-full"
      } fixed ${
        nightMode ? "bg-white" : "bg-neutral-900"
      } h-screen w-65 flex flex-col border-r-[1px] border-red-100 items-start justify-start pt-10 pl-8 overflow-hidden`}
    >
      <div>
        <Image
          className="cursor-pointer"
          onClick={() => SidebarFunc(setSidebar)}
          src={`${
            nightMode ? "/icons/Xbutton.svg" : "/icons/XbuttonDarkmode.svg"
          }`}
          alt="close button icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={`${
          nightMode ? "text-custom-light-blue" : "text-white"
        } flex flex-col mt-30% pt-2.5 min-h-240px justify-around `}
      >
        <p
          onClick={() => {
            Toggle(setIsAccordion, isAccordion);
            console.log("accordion state", isAccordion);
          }}
          className="text-sm font-bold cursor-pointer "
        >
          მთავარი
        </p>
        {!isAccordion ? (
          <div className="pl-2.5  pt-5">
            <Link
              onClick={() => {
                SidebarFunc(setSidebar);
                ChangeFunc(1);
              }}
              href="/"
            >
              <p className="text-xs ">სერვისები</p>
            </Link>
            <Link
              onClick={() => {
                SidebarFunc(setSidebar);
                ChangeFunc(2);
              }}
              href="/"
            >
              <p className="text-xs  pt-6">სიახლე</p>
            </Link>
            <Link
              onClick={() => {
                SidebarFunc(setSidebar);
                ChangeFunc(3);
              }}
              href="/"
            >
              <p className="text-xs  pt-6">კონტაქტი</p>
            </Link>
          </div>
        ) : (
          ""
        )}
        <Link
          onClick={() => {
            SidebarFunc(setSidebar);
            setId(4);
          }}
          href="/about"
        >
          <p className="pt-6 text-sm font-bold cursor-pointer ">
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
          <p className="pt-6 text-sm font-bold cursor-pointer ">
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
            className={`pt-6 text-sm font-bold ${
              window.location.pathname === "/statistics" ||
              window.location.pathname === "/required" ||
              window.location.pathname === "/public" ||
              window.location.pathname === "/about"
                ? "hidden"
                : ""
            } cursor-pointer`}
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
          <p className="pt-6 text-sm font-bold cursor-pointer ">
            საჭირო ინფორმაცია
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
