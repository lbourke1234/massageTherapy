import Image from "next/image";
import Link from "next/link";
import React from "react";

const TreatmentsCard = ({ link, src, alt, heading, index, className }) => {
  return (
    <div
      key={index}
      className="bg-[#EFEBE0] cm800:w-[295px] cm800:h-[400px] lg:basis-1/4 md:basis-1/2 basis-full hover:z-10 duration-500 transition ease-in-out hover:border-gray-400 sm:hover:scale-105"
    >
      <Link href={link}>
        <div className="w-full h-full cmMobile:h-[350px] cm800:h-[250px] px-2 bg-[#fffbf7] pt-4">
          <Image
            className={`object-cover shadow-custom h-full w-full ${className}`}
            src={src}
            alt={alt}
            width={295}
            height={250}
            sizes="(min-width: 800px) 450px, 200px"
            placeholder="blur"
          />
        </div>
        <div className="px-2 bg-[#fffbf7]">
          <div className="px-4 flex flex-col h-[150px] justify-between bg-[#EFEBE0] ">
            <div className="">
              <h3 className="text-black text-2xl font-light pt-4">{heading}</h3>
            </div>
            <div className="mb-4">
              <button className="py-[0.3rem] px-[1.5rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TreatmentsCard;
