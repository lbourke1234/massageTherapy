import React from "react";
import TextColumn from "./TextColumn";
import Image from "next/image";
import Picture from "/public/resources/webp/Marta_Osteopath-205.webp";

const Content = () => {
  return (
    <div className="text-black flex flex-col">
      <div className="block cm470:flex flex-wrap w-[90%] m-auto pb-12">
        <div className="m-auto cm1050:m-0 basis-2/5 flex">
          <Image
            className="cm470:h[400px] h-auto w-full object-cover rounded-3xl shadow-custom"
            src={Picture}
            alt="Marta giving a relaxing back massage to a client"
            height={1380}
            width={921}
            sizes="(min-width: 480px) 35.99vw, 90vw"
            placeholder="blur"
            loading="eager"
          />
        </div>
        <TextColumn />
      </div>
      <div className="h-auto py-8 bg-[#efebe0] flex flex-wrap text-black items-center">
        <div className="h-full basis-full cm1000:basis-1/2">
          <div className="cm500:w-[70%] m-auto cm500:items-start w-4/5 items-center flex-col flex">
            <p className="text-left text-2xl">
              My goal is not only to get to the root of the problem but to equip you with knowledge
              on how to overcome it.
            </p>
          </div>
        </div>
        <div className="cm1000:h-full cm1000:basis-1/2 basis-full">
          <div className="flex-col cm600:flex-row flex justify-center items-center w-[70%] m-auto cmMobile:gap-4 cm600:gap-0">
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/webp/logo1.webp"
              alt="British College of BCOM Osteopathic Medicine Logo"
            />
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/webp/logo2.webp"
              alt="The Institute of Osteopathy Logo"
            />
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/webp/fht-cert.webp"
              alt="The Institute of Osteopathy Logo"
            />
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/webp/itec-cert.webp"
              alt="The Institute of Osteopathy Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
