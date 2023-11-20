"use client";
import React from "react";
import Image from "next/image";
import { useThemeContext } from "../../context/theme";
import Searchbar from "./Searchbar";
import Link from "next/link";

function Header() {
  const {
    visibleSearchbar,
    setVisibleSearchbar,
    moreInfo,
    setMoreInfo,
    sidebar,
    setSidebar,
    ChangeFunc,
  }: any = useThemeContext();

  function Toggle() {
    setMoreInfo(!moreInfo);
    console.log(moreInfo);
  }

  function SidebarFunction() {
    setSidebar(true);
    console.log("sidebar", sidebar);
  }

  function showSearchBar() {
    setVisibleSearchbar(true);
    console.log("visibleSearchbar", visibleSearchbar);
  }

  return (
    <div className="sticky top-0 bg-gray-300 z-50">
      <div className="p-4 pb-3 z-10 flex justify-between items-center">
        <div className="w-24 flex items-center justify-between">
          <Image
            className="cursor-pointer"
            onClick={SidebarFunction}
            src="/icons/Burger.svg"
            alt="burgerbar icon for menu"
            width={22}
            height={15.5}
            id="123"
          />
          <Link onClick={() => ChangeFunc(1)} href="/">
            <span
              className={`${
                moreInfo ? "hidden" : "flex"
              }  text-sm cursor-pointer rounded-sm p-1 hover:bg-white font-bold  text-custom-light-blue`}
            >
              მთავარი
            </span>
          </Link>
        </div>
        <div
          className={`${
            moreInfo ? "w-56" : "w-28"
          } flex items-center justify-around`}
        >
          <Image
            onClick={showSearchBar}
            className="cursor-pointer"
            src="/icons/SearchIcon.svg"
            alt="search bar icon"
            width={22}
            height={15.5}
          />
          <Image
            className={`${moreInfo ? "flex" : "hidden"} cursor-pointer`}
            src="/icons/Adaptive.svg"
            alt="Adaptive icon"
            width={25}
            height={30}
          />
          <Image
            className={`${moreInfo ? "flex" : "hidden"} cursor-pointer`}
            src="/icons/EN.svg"
            alt="english version icon"
            width={25}
            height={30}
          />
          <Image
            className={`${moreInfo ? "flex" : "hidden"} cursor-pointer`}
            src="/icons/NightMode.svg"
            alt="nightmode icon"
            width={25}
            height={30}
          />
          <Image
            className="bg-graycl p-1 cursor-pointer"
            src="/icons/More.svg"
            alt="Icon gives more options"
            width={25}
            height={30}
            onClick={Toggle}
          />
          <Link onClick={() => ChangeFunc(1)} href="/">
            <Image
              className="cursor-pointer"
              src="/icons/Logo.svg"
              alt="organization logo"
              width={50}
              height={30}
            />
          </Link>
        </div>
      </div>
      {visibleSearchbar ? <Searchbar /> : ""}
    </div>
  );
}

export default Header;
