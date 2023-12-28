"use client";
import React from "react";
import { useThemeContext } from "../context/theme";
import Link from "next/link";
import { url } from "inspector";

function page() {
  const { moreInfo, nightMode }: any = useThemeContext();
  const ImageBackground =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsvgsilh.com%2Fimage%2F26432.html&psig=AOvVaw3Ji01hUJEMPcUtt11V6aJ8&ust=1702549854200000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj6nc2ajIMDFQAAAAAdAAAAABAD";

  return (
    <div
      className={`${
        !nightMode ? "bg-neutral-900 " : "bg-transparent"
      } w-full h-big-height  flex`}
    >
      <Link href="/" className="w-[65px]">
        <img
          src="./icons/arrows/ArrowUp.svg"
          alt="Arrow to the left"
          className={`${
            !nightMode ? "bg-neutral-900" : "bg-transparent"
          } transform -rotate-90`}
        />
      </Link>
      <div
        className={`${
          !nightMode ? "bg-neutral-900 background-dots" : "bg-transparent"
        }`}
      >
        <h1
          className={`${moreInfo ? "hidden" : "flex"}  text-sm ${
            nightMode ? "text-custom-light-blue" : "text-white"
          } cursor-pointer rounded-sm p-1 font-bold`}
        >
          სერვისები
        </h1>
        <nav
          className={`${
            nightMode ? "text-gray-500" : "text-white"
          } grid grid-cols-4 justify-end grid-rows-1 gap-0`}
        >
          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                მიწის რეგისტრაციის რეფორმა
              </li>
              <li className="pt-[10px] pb-[25px]">
                მიწის სისტემური რეგისტრაცია
              </li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                შეზღუდვები და უფლებები
              </li>
              <li className="pt-[10px]">
                ყადაღის, საგადასახადო გირავნობა/იპოთეკის რეესტრი
              </li>
              <li>განცხადების ძებნა</li>
              <li>ცნობა საჯაროსამართლებრივი შეზღუდვის შესახებ</li>
              <li>
                ინფორმაციის მომზადება საგადასახადო გირავნობის/ იპოთეკის
                უფლებების არსებობის შესახებ
              </li>
              <li>
                ინფორმაციის მომზადება საჯაროსამართლებრივი შეზღუდვის არსებობის
                შესახებ
              </li>
              <li className="pb-[25px]">მოვალეთა რეესტრი</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                უძრავი ქონება
              </li>
              <li className="pt-[10px]">განცხადების ძებნა</li>
              <li>ტექნიკური ხარვეზის შესწორება</li>
              <li>ამონაწერის და საკადასტრო გეგმის მომზადება</li>
              <li>დოკუმენტის ასლის გამოთხოვა</li>
              <li>ინფორმაცია ტექნიკური აღრიცხვის არქივიდან</li>
              <li>ძიება ბლოკჩეინში</li>
              <li className="pb-[25px]">დოკუმენტების ნიმუშები</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                მუნიციპალიტეტები
              </li>
              <li className="pt-[10px] pb-[25px]">მუნიციპალიტეტების ძებნა</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                გირავნობა,ლიზინგი
              </li>
              <li className="pt-[10px]">გირავნობა ლიზინგის რეესტრი</li>
              <li>განცხადების ძებნა</li>
              <li className="pb-[25px]">ელექტრონული განცხადება</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                ბიზნესი•ააიპ
              </li>
              <li className="pt-[10px] ">ამონაწერის მომზადება</li>
              <li>მოძებნე სუბიექტი</li>
              <li>ტექნიკური ხარვეზის შესწორება</li>
              <li>დოკუმენტის ასლის გამოთხოვა</li>
              <li className="pb-[25px]">ანგარიშების პორტალი</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                გეოინფორმაცია, რუკები
              </li>
              <li className="pt-[10px]">სტანდარტები</li>
              <li>გეოგრაფიული ტერმინთა ორთოგრაფიული ლექსიკონი</li>
              <li>გეოგრაფიულ ტერმინთა განმარტებითი ლექსიკონი</li>
              <li>მუდმივმოქმედი სარეფერენციო სადგურები</li>
              <li>ეროვნული სივრცითი მონაცემების ინფრასტრუქტურა</li>
              <li className="pb-[25px]">maps.gov.ge</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                ეკონომიკური საქმიანობები
              </li>
              <li className="pt-[10px] pb-[25px]">განცხადების ძებნა</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                მისამართები
              </li>
              <li className="pt-[10px]">მისამართების რეესტრი</li>
              <li className="pb-[25px]">ელექტრონული განცხადება</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                პოლიტიკური პარტიები
              </li>
              <li className="pt-[10px] pb-[25px]">
                მოძებნე პოლიტიკური გაერთიანება
              </li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                საინფორმაციო სერვისები
              </li>
              <li className="pt-[10px] pb-[25px]">ელექტრონული კანცელარია</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                საჯარო სტატუსი
              </li>
              <li className="pt-[10px]">საჯარაოდ გამოცხადება</li>
              <li>საჯაროდ შეტყობინება</li>
              <li className="pb-[25px]">საჯაროდ გამოქვეყნება</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default page;
