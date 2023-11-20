"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import list from "../../list.json";
import AboutUs from "../components/about/AboutUs";
import History from "../components/about/History";
import Formers from "../components/about/Formers";
import Structure from "../components/about/Structure";
import Report from "../components/about/Report";
import Strategy from "../components/about/Strategy";
import LegalActs from "../components/about/LegalActs";
import Vacancy from "../components/about/Vacancy";
import Publication from "../components/about/Publication";

function page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(
    "ჩვენ შესახებ"
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
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="w-full  text-black flex overflow-hidden pb-8 flex-col">
      <div
        id="125"
        ref={selectorRef}
        className={`${
          !isOpen ? "rounded-lg" : "rounded-t-lg"
        } bg-custom-selector-white p-3 fixed ${
          selectedItem === "სტრუქტურა" ? "hidden" : "flex"
        } h-10 flex flex-col left-4 right-4 items-center border-white justify-between top-16 ${
          isOpen ? "border-b-2" : ""
        } `}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex justify-between items-center border-transparent text-sm cursor-pointer text-custom-blue"
        >
          {selectedItem}
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
            {list.map((item: any, index: any) => {
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
      {selectedItem === "ჩვენ შესახებ" ? (
        <AboutUs />
      ) : selectedItem === "ისტორია" ? (
        <History />
      ) : selectedItem === "ყოფილი თანამშრომლები" ? (
        <Formers />
      ) : selectedItem === "სტრუქტურა" ? (
        <Structure />
      ) : selectedItem === "ანგარიში" ? (
        <Report />
      ) : selectedItem === "სტრატეგია" ? (
        <Strategy />
      ) : selectedItem === "სამართლებრივი აქტი" ? (
        <LegalActs />
      ) : selectedItem === "ვაკანსია" ? (
        <Vacancy />
      ) : selectedItem === "პუბლიკაცია" ? (
        <Publication />
      ) : (
        ""
      )}
    </div>
  );
}

export default page;
