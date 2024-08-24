import FastNavbar from "@/app/components/nav/FastNavbar";
import Link from "next/link";
import React from "react";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import ContactInfo from "../contactInfo/ContactInfo";

const Services = ({ data }) => {
  return (
    <>
      <FastNavbar />
      <div className="cm992:h-48 h-16"></div>
      <div className="m-auto text-black" key={data.key}>
        <Link href={"/#services"}>
          <div className="cm992:absolute cmMobile:flex top-[150px] left-0 cmMobile:justify-end cm1050:justify-start px-4">
            <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] bg-white text-black bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
              Back
            </button>
          </div>
        </Link>
        <h1 className="cmMobile:px-3 pb-4 md:pb-12 cm800:text-2em cmMobile:text-2xl text-center">
          {data.name}
        </h1>
        <Top data={data} />
        <HowDoesItWork data={data} />
        <Benefits data={data} />
        <WhoCanBenefit data={data} />
        <div className="w-[70%] m-auto py-4 mt-4">
          <Link href={"/booking"}>
            <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] bg-white text-black bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
              Book Now!
            </button>
          </Link>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default Services;
