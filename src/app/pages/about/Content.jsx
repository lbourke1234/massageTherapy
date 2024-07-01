import React from "react";
import TextColumn from "./TextColumn";

const Content = () => {
  return (
    <div className="text-black flex flex-col">
      <div className="block cm470:flex flex-wrap w-[90%] m-auto pb-12">
        <div className="m-auto cm1050:m-0 basis-2/5 flex">
          <img
            className="cm470:h[400px] h-auto w-full object-cover rounded-3xl shadow-custom"
            src="resources/Marta_Osteopath-205.jpg"
            alt="Marta giving a back massage "
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
          <div className="flex-col cm600:flex-row flex justify-center items-center w-[70%] m-auto">
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/logo1.jpeg"
              alt="British College of BCOM Osteopathic Medicine Logo"
            />
            <img
              className="cm470:block w-[100px] mr-4 object-cover shadow-custom rounded-lg"
              src="resources/logo2.jpeg"
              alt="The Institute of Osteopathy Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
