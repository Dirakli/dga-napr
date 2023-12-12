"use client";
import React from "react";
import { useThemeContext } from "../context/theme";

function page() {
  const { moreInfo, nightMode }: any = useThemeContext();

  return (
    <div
      className={`${
        !nightMode ? "bg-neutral-900" : "bg-gray-300"
      } w-full h-big-height flex`}
    >
      <img
        src="./icons/arrows/ArrowUp.svg"
        alt="Arrow to the left"
        className={`${
          !nightMode ? "bg-neutral-900" : "bg-gray-300"
        }  h-[30px] w-[35px] transform -rotate-90`}
      />
      <div className={`${!nightMode ? "bg-neutral-900" : "bg-gray-300"}`}>
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
              <li>მიწის სისტემური რეგისტრაცია</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                შეზღუდვები და უფლებები
              </li>
              <li>ყადაღის, საგადასახადო გირავნობა/იპოთეკის რეესტრი</li>
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
              <li>მოვალეთა რეესტრი</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                უძრავი ქონება
              </li>
              <li>განცხადების ძებნა</li>
              <li>ტექნიკური ხარვეზის შესწორება</li>
              <li>ამონაწერის და საკადასტრო გეგმის მომზადება</li>
              <li>დოკუმენტის ასლის გამოთხოვა</li>
              <li>ინფორმაცია ტექნიკური აღრიცხვის არქივიდან</li>
              <li>ძიება ბლოკჩეინში</li>
              <li>დოკუმენტების ნიმუშები</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                მუნიციპალიტეტები
              </li>
              <li>მუნიციპალიტეტების ძებნა</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                გირავნობა,ლიზინგი
              </li>
              <li>გირავნობა ლიზინგის რეესტრი</li>
              <li>განცხადების ძებნა</li>
              <li>ელექტრონული განცხადება</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                ბიზნესი•ააიპ
              </li>
              <li>ამონაწერის მომზადება</li>
              <li>მოძებნე სუბიექტი</li>
              <li>ტექნიკური ხარვეზის შესწორება</li>
              <li>დოკუმენტის ასლის გამოთხოვა</li>
              <li>ანგარიშების პორტალი</li>
            </ul>

            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                გეოინფორმაცია, რუკები
              </li>
              <li>სტანდარტები</li>
              <li>გეოგრაფიული ტერმინთა ორთოგრაფიული ლექსიკონი</li>
              <li>გეოგრაფიულ ტერმინთა განმარტებითი ლექსიკონი</li>
              <li>მუდმივმოქმედი სარეფერენციო სადგურები</li>
              <li>ეროვნული სივრცითი მონაცემების ინფრასტრუქტურა</li>
              <li>maps.gov.ge</li>
            </ul>
          </div>

          <div>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                ეკონომიკური საქმიანობები
              </li>
              <li>განცხადების ძებნა</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                მისამართები
              </li>
              <li>მისამართების რეესტრი</li>
              <li>ელექტრონული განცხადება</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                პოლიტიკური პარტიები
              </li>
              <li>მოძებნე პოლიტიკური გაერთიანება</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                საინფორმაციო სერვისები
              </li>
              <li>ელექტრონული კანცელარია</li>
            </ul>
            <ul>
              <li className={`${nightMode ? "text-black" : "text-gray-500"}`}>
                საჯარო სტატუსი
              </li>
              <li>საჯარაოდ გამოცხადება</li>
              <li>საჯაროდ შეტყობინება</li>
              <li>საჯაროდ გამოქვეყნება</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default page;
