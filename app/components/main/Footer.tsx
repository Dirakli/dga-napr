"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useThemeContext } from "@/app/context/theme";

function Footer() {
  const { id, setId }: any = useThemeContext();

  const Plus = () => {
    if (id < 3) {
      setId(id + 1);
      console.log("plus id", id);
    }
  };

  const Minus = () => {
    if (id > 1) {
      setId(id - 1);
      console.log("minus id", id);
    }
  };

  return id !== 4 ? (
    <div className="sticky bottom-0 bg-gray-300">
      <div className="flex items-center justify-between p-4 pb-3 border-t-2 border-white h-16">
        <span className="text-sm cursor-pointer text-custom-blue">
          {id === 1
            ? "სერვისები"
            : id === 2
            ? "სიახლეები"
            : id === 3
            ? "კონტაქტი"
            : null}
        </span>
        <div className="flex">
          <Image
            className="mr-3"
            onClick={Minus}
            src={`${
              id === 1
                ? "/icons/arrows/ArrowUp.svg"
                : "/icons/arrows/ArrowUpGray.svg"
            }`}
            alt="arrow up"
            width={36}
            height={36}
          />
          <Image
            onClick={Plus}
            src={`${
              id !== 3
                ? "/icons/arrows/ArrowDown.svg"
                : "/icons/arrows/ArrowDownGray.svg"
            }`}
            alt="arrow down"
            width={36}
            height={36}
          />
        </div>
      </div>
    </div>
  ) : null;
}

export default Footer;
