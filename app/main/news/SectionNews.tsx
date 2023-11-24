import React from "react";
import { useThemeContext } from "@/app/context/theme";

function SectionNews() {
  const { dataPhotos, dataTitle, dataDate, nightMode }: any = useThemeContext();

  const renderNews = () => {
    return dataPhotos.slice(0, 6).map((photo: any, index: number) => (
      <div
        className={`${
          nightMode ? "hover:bg-slate-50" : "hover:bg-neutral-800"
        } flex flex-col hover:rounded-b hover:pb-3 hover:200 
        hover:translate-y-8px  delay-100 duration-200
        justify-between items-start mt-3.5 cursor-pointer`}
        key={index}
      >
        <img
          className="h-56 w-full hover: top-1/3"
          src={photo.url}
          alt={`news cover photo`}
        />
        <h1
          className={`${
            nightMode ? "text-custom-black" : "text-white"
          } pl-3 mt-3 text-sm font-bold`}
        >
          {dataTitle[index]?.title}
        </h1>
        <h4 className="pl-3 mt-2 text-custom-gray text-xs font-normal">
          {dataDate[index]?.date}
        </h4>
      </div>
    ));
  };

  return <div className="pl-8 pr-8 pb-12 overflow-hidden">{renderNews()}</div>;
}

export default SectionNews;
