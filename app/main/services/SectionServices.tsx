"use client";
import "rmc-picker/assets/index.css";
import Picker from "rmc-picker/lib/Picker";
import React from "react";

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

  const onChange = (value: any) => {
    console.log(value);
    setValue(value);
  };

  const getItems = () => {
    console.log("valueee:", value);
    return textArray.map((text, index) => (
      <Picker.Item className="bg-red-400 " value={index + ""} key={index}>
        {text}
      </Picker.Item>
    ));
  };

  const [items, setItems] = React.useState(getItems());

  return (
    <div className="w-[215px] h-[210px] bg-red-300">
      <Picker
        className="bg-blue-300"
        selectedValue={value}
        onValueChange={onChange}
      >
        {items}
      </Picker>
    </div>
  );
}

export default SectionPicker;
