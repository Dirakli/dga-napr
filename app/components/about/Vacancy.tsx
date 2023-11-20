import React from "react";
import listVacancy from "../../../listVacancy.json";
import HandleDownload from "../public/HandleDownload";

function Vacancy() {
  return (
    <div className="h-full w-full pr-4 mt-[80px] flex justify-center items-center">
      <div className="grid grid-cols-1 grid-rows-6 gap-y-4">
        {listVacancy.map((item: any, index: any) => {
          return (
            <div
              onClick={HandleDownload}
              key={index}
              className="w-[340px] cursor-pointer flex flex-col justify-between p-[15px] rounded-lg border-[1px] border-white border-solid h-[150px] bg-gray-200"
            >
              <p className="text-sm font-light text-[#464e5f]">{item}</p>
              <div className="flex w-full justify-end">
                <span className="text-[11px] bg-slate-100 rounded-md  text-arrow-gray py-1 px-2">
                  განახლება და ცვლილების შემთხვევაში
                </span>
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

export default Vacancy;
