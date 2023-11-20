import React from "react";
import HandleDownload from "../public/HandleDownload";

function Report() {
  return (
    <div className="h-screen w-full flex justify-center items-start mt-[80px] ">
      <div
        onClick={HandleDownload}
        className="w-[340px] cursor-pointer flex flex-col justify-between p-[15px] rounded-lg border-[1px] border-white border-solid h-[150px] bg-gray-200"
      >
        <p className="text-sm font-light text-[#464e5f]">ანგარიში 2021</p>
        <div className="flex w-full justify-end">
          <span className="text-[11px] bg-slate-100 rounded-md  text-arrow-gray py-1 px-2">
            განახლება და ცვლილების შემთხვევაში
          </span>
          <span className="text-[11px] bg-slate-100 ml-[1px] rounded-md text-arrow-gray py-1 px-2">
            19.04.2021
          </span>
        </div>
      </div>
    </div>
  );
}

export default Report;
