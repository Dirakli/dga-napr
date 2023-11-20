'use client'
import SectionServices from "./main/services/SectionServices";
import { useThemeContext } from "./context/theme";
import SectionNews from "./main/news/SectionNews";
import SectionContacts from "./main/contacts/SectionContacts";
import Link from "next/link";

export default function Home(): JSX.Element {
const { id }: any = useThemeContext();

  return (
    <div className="flex justify-center items-center" >
      {id === 1 ? <SectionServices /> : id === 2 ? <SectionNews /> : id === 3 ? <SectionContacts /> : ''}
      </div>
  )
}


