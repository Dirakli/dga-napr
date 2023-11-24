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
    nightMode,
    setNightMode,
    NightModeFunc,
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
    <div
      className={`${
        nightMode ? "bg-gray-300" : "bg-neutral-900"
      } sticky top-0 z-50`}
    >
      <div className="p-4 pb-3 z-10 flex justify-between items-center">
        <div className="w-24 flex items-center justify-between">
          <Image
            className="cursor-pointer"
            onClick={SidebarFunction}
            src={!nightMode ? "/icons/BurgerDarkmode.svg" : "/icons/Burger.svg"}
            alt="burgerbar icon for menu"
            width={22}
            height={15.5}
            id="123"
          />
          <Link
            href="/"
            onClick={() => {
              ChangeFunc(1);
            }}
          >
            <span
              className={`${moreInfo ? "hidden" : "flex"}  text-sm ${
                nightMode ? "text-custom-light-blue" : "text-white"
              } cursor-pointer rounded-sm p-1 ${
                nightMode ? "hover:bg-white" : "hover:bg-custom-blue"
              } font-bold`}
            >
              მთავარი
            </span>
          </Link>
        </div>

        <div
          className={`${
            moreInfo ? "w-56" : "w-28"
          } flex sm:w-full items-center justify-around`}
        >
          <div className="hidden sm:flex rounded-md items-center p-2.5">
            <div className="flex">
              <Image
                src="/icons/SearchIcon.svg"
                alt="search icon"
                width={24}
                height={24}
              />
              <input
                className="pl-2 text-Input-value"
                type="text"
                placeholder="ძებნა"
              />
            </div>
          </div>
          <Image
            onClick={showSearchBar}
            className="cursor-pointer sm:hidden"
            src={
              nightMode
                ? "/icons/SearchIcon.svg"
                : "/icons/SearchIconDarkmode.svg"
            }
            alt="search bar icon"
            width={22}
            height={15.5}
          />
          <Image
            className={`${moreInfo ? "flex" : "hidden"} sm:flex cursor-pointer`}
            src={
              nightMode ? "/icons/Adaptive.svg" : "/icons/AdaptiveDarkmode.svg"
            }
            alt="Adaptive icon"
            width={25}
            height={30}
          />
          <Image
            className={`${moreInfo ? "flex" : "hidden"} sm:flex cursor-pointer`}
            src={nightMode ? "/icons/EN.svg" : "/icons/ENDarkmode.svg"}
            alt="english version icon"
            width={25}
            height={30}
          />
          <Image
            onClick={NightModeFunc}
            className={`${moreInfo ? "flex" : "hidden"} sm:flex cursor-pointer`}
            src={nightMode ? "/icons/NightMode.svg" : "/icons/Sun.svg"}
            alt="nightmode icon"
            width={25}
            height={30}
          />
          <Image
            className="bg-graycl sm:hidden flex p-1 cursor-pointer"
            src={nightMode ? "/icons/More.svg" : "/icons/MoreDa rkmode.svg"}
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
          <Image
            className="cursor-pointer sm:flex hidden"
            src="/icons/HeaderIcon.svg"
            alt="heading logo"
            width={50}
            height={30}
          />
        </div>
      </div>
      {visibleSearchbar ? <Searchbar /> : ""}
    </div>
  );
}

export default Header;
