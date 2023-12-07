"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import listRequired from "../../listRequired.json";
import Acts from "../components/public/Acts";
import { useThemeContext } from "../context/theme";

function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(
    "თბილისის მიწის სისტემური რეგისტრაცია"
  );

  const { nightMode, showMainContent }: any = useThemeContext();

  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        selectorRef.current &&
        !(selectorRef.current as any).contains(event.target)
      ) {
        setIsOpen(false);
        console.log("clicked on body (selector)", isOpen);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [setIsOpen]);

  const handleItemClick = (item: string) => {
    setSelectedSection(item);
    setIsOpen(false);
  };

  return (
    <div
      className={`${!nightMode ? "bg-neutral-900" : ""} w-full  ${
        !showMainContent ? "flex" : "hidden"
      } text-black overflow-hidden pl-4 pb-8 flex-col`}
    >
      <div
        className={` ${
          !nightMode ? "bg-black" : "bg-[#e5e7eb]"
        } h-full w-0.5 hidden sm:flex absolute left-4`}
      ></div>
      <ul
        className={` ${
          selectedSection === "სტრუქტურა" ? "sm:hidden" : "sm:flex"
        } hidden sm:flex flex-col opacity-50 absolute top-20 left-4`}
      >
        {listRequired.map((item: any, index: any) => {
          return (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={`text-sm pl-[2px] mt-4 cursor-pointer ${
                selectedSection === item
                  ? "text-custom-blue"
                  : "text-arrow-gray active:text-custom-blue"
              } ${
                selectedSection === item ? "border-l-2 border-custom-blue" : ""
              } `}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div
        id="125"
        ref={selectorRef}
        className={`${!isOpen ? "rounded-lg" : "rounded-t-lg"} ${
          nightMode ? "bg-custom-selector-white" : "bg-neutral-800"
        } p-3 fixed h-10 flex flex-col left-4 right-4 items-center ${
          nightMode ? "border-white" : "border-gray-500"
        } justify-between top-16 ${isOpen ? "border-b-2" : ""} sm:hidden`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full h-full flex justify-between items-center border-transparent text-sm cursor-pointer text-custom-blue"
        >
          {selectedSection}
          <Image
            src={`${
              !isOpen
                ? "./icons/arrows/selectorArrowDown.svg"
                : "./icons/arrows/selectorArrowUp.svg"
            }`}
            alt="arrow icon"
            width={10}
            height={14}
          ></Image>
        </button>
        {isOpen && (
          <div
            className={`${
              nightMode ? "bg-custom-selector-white " : "bg-neutral-800"
            } absolute top-10 flex flex-col items-start rounded-b-lg w-full`}
          >
            {listRequired.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => handleItemClick(item)}
                  key={index}
                  className={`${isOpen ? "border-b-2" : ""} w-full ${
                    nightMode ? "border-white" : "border-gray-500"
                  } flex justify-between items-center h-9`}
                >
                  <h3 className="text-sm cursor-pointer text-arrow-gray active:text-custom-blue ml-3">
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Acts />
    </div>
  );
}

export default page;
