"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import listPublic from "../../listPublic.json";
import AboutUs from "../components/about/AboutUs";
import History from "../components/about/History";
import Formers from "../components/about/Formers";
import Structure from "../components/about/Structure";
import Acts from "../components/public/Acts";

function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(
    "სამართლებრივი აქტები"
  );

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
    <div className="w-full  text-black flex overflow-hidden pl-4 pb-8 flex-col">
      <div
        id="125"
        ref={selectorRef}
        className={`${
          !isOpen ? "rounded-lg" : "rounded-t-lg"
        } bg-custom-selector-white p-3 fixed h-10 flex flex-col left-4 right-4 items-center border-white justify-between top-16 ${
          isOpen ? "border-b-2" : ""
        } `}
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
          <div className=" bg-custom-selector-white absolute top-10 flex flex-col items-start rounded-b-lg w-full">
            {listPublic.map((item: any, index: any) => {
              return (
                <div
                  onClick={() => handleItemClick(item)}
                  key={index}
                  className={`${
                    isOpen ? "border-b-2" : ""
                  } w-full border-white flex justify-between items-center h-10`}
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
