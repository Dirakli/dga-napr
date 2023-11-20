import React from "react";
import Image from "next/image";

function Structure() {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <div className="flex items-center">
        <Image
          src="./icons/arrows/ArrowUp.svg"
          alt="left side arrow"
          className="transform -rotate-90 bg-gray-300"
          width={35}
          height={30}
        />
        <p className="text-sm cursor-pointer rounded-sm p-2 text-custom-light-blue">
          სააგენტოს შესახებ
        </p>
      </div>
      <div className="flex flex-col items-end pl-4">
        <div className="w-full flex flex-col chairman items-center justify-around bg-white rounded-md">
          <span className="text-sm">თავმჯდომარე</span>
          <h3 className="text-base">დავით დევიძე</h3>
        </div>

        <div className="w-full flex flex-col chairman-deputy-wrapper items-center justify-around">
          <div className="w-full flex flex-col chairman-deputy items-center justify-around bg-white rounded-md">
            <span className="text-sm">თავმჯდომარის მოადგილე</span>
            <h3 className="text-base">ვახტანგ ბოხაშვილი</h3>
          </div>
        </div>

        <div className="w-full flex flex-col legal-department-wrapper items-center justify-around">
          <div className="w-full flex flex-col legal-department items-center justify-around bg-custom-gray rounded-md">
            <span className="text-sm">იურიდიული დეპარტამენტი</span>
            <h3 className="text-base">თამარ ხუბაშვილი</h3>
          </div>
        </div>

        <div className="w-full flex flex-col court-service-wrapper items-center justify-around">
          <div className="w-full flex flex-col court-service items-center justify-around bg-white rounded-md">
            <span className="text-xs pr-7">
              სასამართლოებთან ურთიერთობის სამსახური
            </span>
            <h3 className="text-base">ნინო ყიფიანი </h3>
          </div>
          <div className="w-full flex flex-col court-service-second items-center justify-around bg-white rounded-md">
            <span className="text-xs pr-7">
              ადმინისტრაციული წარმოების სამსახური
            </span>
            <h3 className="text-base">ირინა ქაროსანიძე</h3>
          </div>
          <div className="w-full flex flex-col court-service-third items-center justify-around bg-white rounded-md">
            <span className="text-xs pr-7">
              სამართლებრივი უზრუნველყოფის სამსახური
            </span>
            <h3 className="text-base">თამთა ჭანტურია</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structure;
