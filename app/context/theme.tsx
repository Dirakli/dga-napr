"use client";
import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: { children: any }) => {
  const [moreInfo, setMoreInfo] = useState<any>(false);
  const [sidebar, setSidebar] = useState<any>(false);
  const [visibleSearchbar, setVisibleSearchbar] = useState<any>(false);
  const [id, setId] = useState(1);
  const [dataPhotos, setDataPhotos] = useState<any>(null);
  const [dataTitle, setDataTitle] = useState<any>(null);
  const [dataDate, setDataDate] = useState<any>(null);
  const [showMainContent, setShowMainContent] = useState(true);
  const [forceOpen, setForceOpen] = useState(false);

  function ChangeFunc(num: any) {
    setId((prevId: any) => {
      console.log("context ID", prevId);
      return num;
    });
  }

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      return setDataPhotos(data);
    };

    const fetchTitles = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return setDataTitle(data);
    };

    const fetchDate = async () => {
      const response = await fetch("https://fakestoreapi.com/carts");
      const data = await response.json();
      return setDataDate(data);
      console.log(data);
    };

    fetchPhotos();
    fetchTitles();
    fetchDate();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        moreInfo,
        setMoreInfo,
        sidebar,
        setSidebar,
        visibleSearchbar,
        setVisibleSearchbar,
        id,
        setId,
        ChangeFunc,
        dataPhotos,
        dataTitle,
        dataDate,
        setShowMainContent,
        showMainContent,
        forceOpen,
        setForceOpen,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
