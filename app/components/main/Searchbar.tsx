import React, { useRef, useEffect } from "react";
import { useThemeContext } from "../../context/theme";
import Image from "next/image";

function Searchbar() {
  const { setVisibleSearchbar }: any = useThemeContext();
  const searchbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        searchbarRef.current &&
        !(searchbarRef.current as any).contains(event.target)
      ) {
        setVisibleSearchbar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setVisibleSearchbar]);

  return (
    <div
      ref={searchbarRef}
      className="absolute top-0 left-0 w-full bg-white z-30 rounded-md"
    >
      <div className="w-full flex justify-between items-center p-2.5">
        <div className="flex">
          <Image
            src="/icons/SearchIcon.svg"
            alt="search icon"
            width={24}
            height={24}
          />
          <input
            className="pl-2 text-Input-value"
            type="text"
            placeholder="ძებნა"
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
