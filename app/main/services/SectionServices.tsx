"use client";
import "rmc-picker/assets/index.css";
import Picker from "rmc-picker/lib/Picker";
import React, { useEffect } from "react";
import { useThemeContext } from "@/app/context/theme";

const textArray = [
  "მიწის რეგისტრაციის რეფორმა",
  "უძრავი ქონება",
  "ბიზნესი•ააიპ",
  "იურიდიული პრაქტიკა",
  "ეკონომიკური საქმიანობები",
  "შეზღუდვები და უფლებები",
  "მისამართები",
  "გეოინფორმაცია, რუკები",
  "პოლიტიკური პარტიები",
  "მუნიციპალიტეტები",
  "საინფორმაციო სერვისები",
  "გირავნობა, ლიზინგი",
  "საჯარო სტატუსი",
];

function SectionPicker() {
  const [value, setValue] = React.useState();
  const { selectedService, setSelectedService }: any = useThemeContext();

  const onChange = (value: any) => {
    console.log(value);
    setValue(value);
  };

  const getItems = () => {
    console.log("valueee:", value);
    return textArray.map((text, index) => (
      <Picker.Item value={index + ""} key={index}>
        {text}
      </Picker.Item>
    ));
  };

  const [items, setItems] = React.useState(getItems());

  return (
    <div className="w-[215px] h-[210px] ">
      <div className="sm:hidden">
        <Picker selectedValue={value} onValueChange={onChange}>
          {items}
        </Picker>
      </div>
      <div className="sm:flex hidden text-center">
        <h1 className="text-custom-blue text-[24px]">{selectedService}</h1>
      </div>
    </div>
  );
}

export default SectionPicker;
