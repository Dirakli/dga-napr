"use client";
import SectionServices from "../../main/services/SectionServices";
import { useThemeContext } from "../../context/theme";
import SectionNews from "../../main/news/SectionNews";
import SectionContacts from "../../main/contacts/SectionContacts";
import ServiceList from "../../components/main/ServiceList";
function ListScreenX() {
  const { id, setId, nightMode }: any = useThemeContext();

  function ChangeId(num: number) {
    return setId(num);
  }
  return (
    <div>
      <ul className="hidden sm:flex flex-col opacity-50 absolute left-4 top-[70px] ">
        <li
          onClick={() => ChangeId(1)}
          className={`${id === 1 ? "text-custom-blue" : "text-gray-500"}  ${
            id === 1 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          ჩვენ შესახებ
        </li>
        <li
          onClick={() => ChangeId(2)}
          className={` ${id === 2 ? "text-custom-blue" : "text-gray-500"}
            
          ${
            id === 2 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          სტრუქტურა
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          ისტორია
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          ყოფილი თანამშრომლები
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          ანგარიში
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          სტრატეგია
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          სამართლებრივი აქტი
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          ვაკანსია
        </li>
        <li
          onClick={() => ChangeId(3)}
          className={`${id === 3 ? "text-custom-blue" : "text-gray-500"} ${
            id === 3 ? "border-l-2 border-custom-blue" : ""
          } text-sm pl-1 mt-4 cursor-pointer  `}
        >
          პუბლიკაცია
        </li>
      </ul>
    </div>
  );
}

export default ListScreenX;
