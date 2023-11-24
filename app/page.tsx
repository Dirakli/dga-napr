"use client";
import SectionServices from "./main/services/SectionServices";
import { useThemeContext } from "./context/theme";
import SectionNews from "./main/news/SectionNews";
import SectionContacts from "./main/contacts/SectionContacts";

export default function Home(): JSX.Element {
  const { id, nightMode }: any = useThemeContext();

  return (
    <div
      className={`${
        !nightMode ? "bg-neutral-900" : ""
      } flex wrapper justify-center items-center`}
    >
      {id === 1 ? (
        <SectionServices />
      ) : id === 2 ? (
        <SectionNews />
      ) : id === 3 ? (
        <SectionContacts />
      ) : (
        ""
      )}
    </div>
  );
}
