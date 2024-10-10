import React from "react";
import BespokeButton from "./BespokeButton";
import ContactInfo from "../contactInfo/ContactInfo";
import Link from "next/link";
import Image from "next/image";
import Space from "../about/Space";
import FastNavbar from "@/app/components/nav/FastNavbar";
import Picture from "/public/resources/webp/blog eat.webp";

const Template = () => {
  return (
    <>
      <FastNavbar />
      <Space />
      <div className="w-[95%] cm800:w-[75%] m-auto text-black">
        <Image
          className="h-[50vh] w-full object-cover rounded-3xl"
          src={Picture}
          height={647}
          width={1792}
          sizes="(min-width: 800px) 75vw, 95vw"
          placeholder="blur"
          alt="Healthy person reading while drinking a hot drink, with oats and healthy food"
          loading="eager"
        />
        <Link href={"/blog"}>
          <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <h1 className="text-2xl cm800:text-[2rem] font-semibold pb-2">{``}</h1>
          <p className="cm800:text-[1.2em]">{``}</p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 py-2">{``}</h3>
          <p className="cm800:text-[1.2em]">{``}</p>

          <BespokeButton />
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default Template;
