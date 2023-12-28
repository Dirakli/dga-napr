"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useThemeContext } from "../../context/theme";
import Searchbar from "./Searchbar";
import Link from "next/link";
import HeaderNav from "./HeaderNav";

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

  const [isAdaptiveHovered, setIsAdaptiveHovered] = useState<boolean>(false);

  function Toggle() {
    setMoreInfo(!moreInfo);
    console.log(moreInfo);
  }

  function SidebarFunction() {
    setSidebar(!sidebar); // ეს შევცვალე 14:54ზე //
    console.log("sidebar", sidebar);
  }

  function showSearchBar() {
    setVisibleSearchbar(true);
    console.log("visibleSearchbar", visibleSearchbar);
  }

  function changeAdaptive(prop: any) {
    setIsAdaptiveHovered(prop);
  }

  return (
    <div className={` sticky top-0 z-50`}>
      <div className="p-4 pb-3 z-10 flex justify-between items-center bg-gray-300 sm:bg-transparent">
        <div className="w-24 flex items-center justify-between">
          {!sidebar ? (
            <Image
              className="cursor-pointer"
              onClick={SidebarFunction}
              src={
                !nightMode ? "/icons/BurgerDarkmode.svg" : "/icons/Burger.svg"
              }
              alt="burgerbar icon for menu"
              width={22}
              height={15.5}
              id="123"
            />
          ) : (
            <Image
              className="cursor-pointer"
              onClick={SidebarFunction}
              src={
                !nightMode ? "/icons/XbuttonDarkmode.svg" : "/icons/Xbutton.svg"
              }
              alt="burgerbar icon for menu"
              width={22}
              height={15.5}
              id="123"
            />
          )}
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
        {!sidebar ? "" : <HeaderNav />}

        <div
          className={`${
            !sidebar ? "sm:w-[70%]" : "sm:w-[40%]"
          } flex justify-between`}
        >
          <div className="hidden sm:flex justify-start rounded-md items-center">
            <div className="flex bg-slate-200 rounded-lg pl-2.5">
              <Image
                src="/icons/SearchIcon.svg"
                alt="search icon"
                width={20}
                height={20}
              />
              <input
                className={`${
                  sidebar ? "md:w-[200px]" : "md:w-[300px]"
                }pl-2 sm:min-w-[100px] bg-slate-200 rounded-lg text-Input-value`}
                type="text"
                placeholder="ძებნა"
              />
            </div>
          </div>
          <div
            className={`${
              moreInfo ? "w-56" : "w-28"
            } flex sm:w-56 items-center justify-around`}
          >
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
              onMouseOver={() => {
                changeAdaptive(true);
              }}
              onMouseOut={() => changeAdaptive(false)}
              className={`${
                moreInfo ? "flex" : "hidden"
              } sm:flex cursor-pointer`}
              src={
                nightMode
                  ? "/icons/Adaptive.svg"
                  : "/icons/AdaptiveDarkmode.svg"
              }
              alt="Adaptive icon"
              width={25}
              height={30}
            />
            {isAdaptiveHovered ? (
              <div className="absolute bg-slate-200 p-1 text-xs pr-2 pl-2 rounded top-4 right-60">
                დამუშავების პროცესშია
              </div>
            ) : (
              ""
            )}
            <Image
              className={`${
                moreInfo ? "flex" : "hidden"
              } sm:flex cursor-pointer`}
              src={nightMode ? "/icons/EN.svg" : "/icons/ENDarkmode.svg"}
              alt="english version icon"
              width={25}
              height={30}
            />
            <Image
              onClick={NightModeFunc}
              className={`${
                moreInfo ? "flex" : "hidden"
              } sm:flex cursor-pointer`}
              src={nightMode ? "/icons/NightMode.svg" : "/icons/Sun.svg"}
              alt="nightmode icon"
              width={25}
              height={30}
            />
            <Image
              className="bg-graycl sm:hidden flex p-1 cursor-pointer"
              src={nightMode ? "/icons/More.svg" : "/icons/MoreDarkmode.svg"}
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
      </div>

      {visibleSearchbar ? <Searchbar /> : ""}
    </div>
  );
}

export default Header;
