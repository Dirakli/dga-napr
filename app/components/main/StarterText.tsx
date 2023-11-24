"use client";
import { useThemeContext } from "@/app/context/theme";
import { useEffect, useState } from "react";

const Home = (): JSX.Element => {
  const { showMainContent, setShowMainContent, nightMode }: any =
    useThemeContext();
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainContent(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (showMainContent) {
      const publicInfo = "საჯარო რეესტრის ეროვნული სააგენტო";
      let index = 0;
      const interval = setInterval(() => {
        index += 1;
        setTypedText((prev) => prev + publicInfo[index - 1]);
        if (index === publicInfo.length) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showMainContent]);

  return (
    <div
      className={`transition-transform z-[10000] duration-300 ease-in-out transform ${
        showMainContent ? "translate-x-0" : "-translate-x-full"
      } ${
        nightMode ? "bg-gray-300" : "bg-neutral-900"
      } absolute h-screen w-full flex items-center justify-center`}
    >
      <h2 className=" w-64 text-2xl text-custom-blue text-center starterText">
        {typedText}
      </h2>
    </div>
  );
};

export default Home;
