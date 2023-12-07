import React from "react";
import fileInfo from "../../../fileInfo.json";
import HandleDownload from "../public/HandleDownload";

function LegalActs() {
  return (
    <div className="h-full w-full pr-4 mt-[80px] flex justify-center items-center">
      <div className="grid grid-cols-1 md:gap-x-4 md:grid-cols-2 grid-rows-6 gap-y-4">
        {fileInfo.map((item: any, index: any) => {
          return (
            <div
              onClick={HandleDownload}
              key={index}
              className="w-[340px] sm:w-[280px] cursor-pointer flex flex-col justify-between p-[15px] rounded-lg border-[1px] border-white border-solid h-[150px] bg-gray-200"
            >
              <p className="text-sm font-light text-[#464e5f]">{item}</p>
              <div className="flex w-full justify-end">
                <span className="text-[11px] bg-slate-100 ml-[1px] rounded-md text-arrow-gray py-1 px-2">
                  19.04.2021
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LegalActs;
