"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../context/theme";
import Link from "next/link";
import SidebarNavigation from "./SidebarNavigation";

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
      className={` z-[500] lg:hidden transition-transform duration-300 ease-in-out transform ${
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
      <SidebarNavigation />
    </div>
  );
}

export default Sidebar;
