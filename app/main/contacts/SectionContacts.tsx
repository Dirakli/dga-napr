import Image from "next/image";
import React, { useState } from "react";
import Form from "./form/Form";
import { useThemeContext } from "@/app/context/theme";

function SectionContacts() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showTbilisiAddress, setShowTbilisiAddress] = useState(false);
  const { nightMode }: any = useThemeContext();

  const dataRegions = [
    "აჭარა",
    "გურია",
    "კახეთი",
    "სამეგრელო",
    "სამცხე-ჯავახეთი",
    "ქვემო ქართლი",
    "შიდა ქართლი",
  ];
  const dataCities = [
    "ახალგორი",
    "ახმეტა",
    "ზესტაფონი",
    "თერჯოლა",
    "მცხეხთა",
    "საგარეჯო",
    "სამტრედია",
    "წალენჯიხა",
    "ხაშური",
    "ხელვაჩაური",
    "გაგრა",
    "გალი",
    "გუდაუთა",
    "გულრიფში",
    "ერედვი",
    "ოჩამჩირე",
    "სოხუმი",
    "ქურთა",
    "ცხინვალი",
    "ჯავა",
  ];

  const regionAdress = [
    " ქ. ბათუმი, შ.ხიმშიაშვილის  ქ. N7",
    " ქ. ოზურგეთი ი. პეტრიწის  ქ. N9",
    " ქ. თელავი ერეკლე II-ის გამზ. N3",
    " ქ. ზუგდიდი თეატრის  ქ. N2",
    " ქ. ახალციხე, თამარაშვილის ქუჩის მიმდებარედ",
    " ქ. რუსთავი, ახალგაზრდობის პარკის მიმდებარე ტერიტორია",
    " ქ. გორი, დ. გურამიშვილის  ქ. N5-ის მიმდებარედ",
    "ახალგორი, მუხრანის  ქ. N17",
  ];

  const cityAdress = [
    " ქ. მცხეთა, მუხრანის  ქ. N17",
    " ქ. ახმეტა, ჩოლოყავშვილის  ქ. N50",
    " ქ. ზესტაფონი, წერეთლის  ქ. N5",
    " ქ. თერჯოლა, რუსთაველის  ქ. N95",
    " ქ. მცხეთა, მუხრანის  ქ. N17",
    " ქ. საგარეჯო, ჯაფარიძის  ქ. N2",
    "",
    " ქ. წალენჯიხა, ჭურღულიას  ქ. N5",
    " ქ. ხაშური, გ. ტაბიძის  ქ. N2",
    " ქ. ხელვაჩაური, ლ. გოთუას  ქ. N65",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const handleLocationClick = (index: any) => {
    setSelectedLocation(selectedLocation === index ? null : index);
    setShowTbilisiAddress(false);
  };

  const handleCityClick = (index: any) => {
    setSelectedLocation(selectedLocation === index ? null : index);
    setShowTbilisiAddress(false);
  };

  const handleTbilisiClick = (index: any) => {
    setShowTbilisiAddress(!showTbilisiAddress);
    setSelectedLocation(index);
  };

  return (
    <div className="h-full w-full pl-6 pr-6">
      <div>
        <h1 className="text-custom-light-blue text-base">კონტაქტი</h1>
        <p className="mt-6 text-custom-gray text-sm">
          სამუშაო დრო:{" "}
          <span
            className={`${nightMode ? "text-custom-blue-dark" : "text-white"}`}
          >
            ორშაბათი-პარასკევი; 09:00-18:00სთ
          </span>{" "}
        </p>
        <p className=" text-custom-gray text-sm">
          ცხელი ხაზი:{" "}
          <span
            className={`${nightMode ? "text-custom-blue-dark" : "text-white"}`}
          >
            2 405 405
          </span>{" "}
        </p>
        <p className=" text-custom-gray text-sm">
          ელფოსტა:{" "}
          <span
            className={`${nightMode ? "text-custom-blue-dark" : "text-white"}`}
          >
            INFO@NAPR.GOV.GE
          </span>
        </p>
      </div>
      <div className="pb-5 pt-[20px] flex justify-between w-1/2">
        <a href="https://www.facebook.com/NAPR.gov.ge" target="_blank">
          <Image
            className=""
            src={
              nightMode ? "/icons/Facebook.svg" : "/icons/FacebookDarkmode.svg"
            }
            alt="Facebook icon"
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.instagram.com/npr/?hl=en" target="_blank">
          <Image
            className=""
            src={
              nightMode
                ? "/icons/Instagram.svg"
                : "/icons/InstagramDarkmode.svg"
            }
            alt="Instagram icon"
            width={20}
            height={20}
          />
        </a>
        <a href="https://twitter.com/naprgeorgia?lang=en" target="_blank">
          <Image
            className=""
            src={
              nightMode ? "/icons/Twitter.svg" : "/icons/TwitterDarkmode.svg"
            }
            alt="Twitter icon"
            width={20}
            height={20}
          />
        </a>
        <a href="https://www.facebook.com/NAPR.gov.ge" target="_blank">
          <Image
            className=""
            src={
              nightMode ? "/icons/Facebook.svg" : "/icons/FacebookDarkmode.svg"
            }
            alt="Facebook icon"
            width={20}
            height={20}
          />
        </a>
      </div>
      <h1 className="text-custom-light-blue text-base font-bold leading-5">
        მისამართი
      </h1>
      <ul className="mt-6">
        <li
          className="border-b border-white pb-2.5 pt-2.5 cursor-pointer"
          onClick={handleTbilisiClick}
        >
          <div className="flex justify-between items-center">
            <p className="text-custom-light-blue text-sm leading-6">თბილისი</p>
            {!showTbilisiAddress ? (
              <img src="./icons/downArrow.svg" alt="down arrow icon" />
            ) : (
              <img src="./icons/upArrow.svg" alt="up arrow icon" />
            )}
          </div>
          {showTbilisiAddress && (
            <p className="text-sm text-custom-gray">
              სათაო ოფისი
              <span
                className={`${
                  nightMode ? "text-custom-blue-dark" : "text-white"
                }`}
              >
                {" "}
                ქ.თბილისი, ვახტანგ გორგასლის ქ. N22
              </span>
            </p>
          )}
        </li>
        {dataRegions.map((region, index) => {
          return (
            <li
              className="border-b border-white pb-2.5 pt-2.5 cursor-pointer"
              key={index}
              onClick={() => handleLocationClick(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-custom-light-blue text-sm leading-6">
                  {region}
                </p>
                {selectedLocation !== index ? (
                  <img src="./icons/downArrow.svg" alt="down arrow icon" />
                ) : (
                  <img src="./icons/upArrow.svg" alt="up arrow icon" />
                )}
              </div>
              {selectedLocation === index && (
                <p className="text-sm text-custom-gray">
                  რეგიონალური ოფისი
                  <span
                    className={`${
                      nightMode ? "text-custom-blue-dark" : "text-white"
                    }`}
                  >
                    {regionAdress[index]}
                  </span>
                </p>
              )}
            </li>
          );
        })}
        {dataCities.map((city, index) => {
          return (
            <li
              className="border-b border-white pb-2.5 pt-2.5 cursor-pointer"
              key={index}
              onClick={() => handleCityClick(index + dataRegions.length)}
            >
              <div className="flex justify-between items-center">
                <p className="text-custom-light-blue text-sm leading-6">
                  {city}
                </p>
                {selectedLocation === index + dataRegions.length ? (
                  <img src="./icons/upArrow.svg" alt="up arrow icon" />
                ) : (
                  <img src="./icons/downArrow.svg" alt="down arrow icon" />
                )}
              </div>
              {selectedLocation === index + dataRegions.length && (
                <p className="text-sm text-custom-gray">
                  ფილიალი
                  <span
                    className={`${
                      nightMode ? "text-custom-blue-dark" : "text-white"
                    }`}
                  >
                    {cityAdress[index]}
                  </span>
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <Form />
    </div>
  );
}

export default SectionContacts;
