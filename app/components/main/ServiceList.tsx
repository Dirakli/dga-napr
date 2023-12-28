import { useThemeContext } from "@/app/context/theme";
import React, { useState } from "react";

const List = [
  "მიწის რეგისტრაციის ფორმა",
  "უძრავი ქონება",
  "ბიზნესი•ააიპ",
  "იურიდიული პრაქტიკა",
  "ეკონომიკური საქმიანობები",
  "მისამართები",
  "გეოინფორმაცია, რუკები",
  "პოლიტიკური პარტიები",
  "მუნიციპალიტეტები",
  "საინფორმაციო სერვისები",
  "გირავნობა, ლიზინგი",
  "საჯარო სტატუსი",
];

function ServiceList() {
  const [selectedItem, setSelectedItem] = useState(0);
  const { selectedService, setSelectedService }: any = useThemeContext();

  const handleItemClick = (index: any) => {
    setSelectedItem(index);
  };

  const handleServiceClick = (item: any) => {
    return setSelectedService(item);
  };

  return (
    <div className="absolute hidden sm:flex right-4 top-[150px] ">
      <ul className="flex flex-col h-[350px] justify-between items-end">
        {List.map((item: any, index: any) => (
          <li
            key={index}
            onClick={() => {
              handleItemClick(index);
              handleServiceClick(item);
            }}
            className="flex items-center cursor-pointer"
          >
            <p
              className={`${
                selectedItem === index ? " text-custom-blue" : "text-gray-500"
              } ${
                selectedItem === index ? "text-base" : "text-sm"
              }   mr-1 opacity-50 `}
            >
              {item}
            </p>
            <div className="w-6">
              {selectedItem === index && (
                <span className="h-[1px] w-[24px] bg-custom-blue block"></span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
