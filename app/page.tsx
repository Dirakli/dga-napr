"use client";
import SectionServices from "./main/services/SectionServices";
import { useThemeContext } from "./context/theme";
import SectionNews from "./main/news/SectionNews";
import SectionContacts from "./main/contacts/SectionContacts";
import { useState } from "react";

export default function Home(): JSX.Element {
  const { id, setId, nightMode }: any = useThemeContext();

  function ChangeId(num: number) {
    return setId(num);
  }

  return (
    <div className={`${!nightMode ? "bg-neutral-900" : ""} overflow-hidden`}>
      <ul className="hidden sm:flex flex-col opacity-50 absolute left-4 top-[70px] ">
        <li
          onClick={() => ChangeId(1)}
          className={`${id === 1 ? "text-custom-blue" : ""}  ${
            id === 1 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          სერვისები
        </li>
        <li
          onClick={() => ChangeId(2)}
          className={`${id === 2 ? "text-custom-blue" : ""} ${
            id === 2 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          სიახლე
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : ""} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          კონტაქტი
        </li>
      </ul>
      <p className="hidden pl-1 sm:flex text-sm flex-col opacity-50 absolute cursor-pointer left-[20px] top-[80%]">
        საიტის <br /> რუკა
      </p>
      <div className="hidden pl-1 text-sm bigger-width sm:flex justify-between opacity-50 absolute cursor-pointer left-[20px] top-[95%]">
        <p> საჯარო რეესტრის ეროვნული სააგენტო 2022წ</p>
        <p>ყველა უფლება დაცულია</p>
        <p>ვებსაიტის გამოყენების წესები და პირობები</p>
      </div>
      <div
        className={`${!nightMode ? "bg-neutral-900" : ""} flex 
        h-small-height sm:h-big-height
        ${
          !nightMode ? "sm:border-black" : ""
        } sm:ml-4 sm:border-l-2 sm:w-screen justify-center items-center`}
      >
        {id === 1 ? (
          <SectionServices />
        ) : id === 2 ? (
          <SectionNews />
        ) : id === 3 ? (
          <SectionContacts />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
