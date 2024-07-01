import React from "react";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

const PreviewCard = ({ data }) => {
  return (
    <div className="basis-full cm992:basis-1/2 text-black p-4">
      <Link href={data.link}>
        <img
          className="w-full h-[500px] object-cover rounded-3xl hover:cursor-pointer"
          src={data.image}
        />
      </Link>
      <div className="flex-col cm331:flex-row items-start cm331:items-center flex pt-4">
        <FaRegUser className="hidden cm331:block" />
        <span className="cm1200:text-xl underline ml-1">{data.author} </span>
        <span className="cm331:flex ml-1 items-center gap-1 hidden">
          {" - "} <FaRegClock />
        </span>
        <span className="cm1200:text-xl ml-1">{data.date}</span>
      </div>
      <Link href={data.link}>
        <h2 className="text-2xl cm1200:text-4xl pb-1 pt-2 hover:cursor-pointer font-bold">
          {data.title}
        </h2>
      </Link>
      <span>{data.preview}</span>
    </div>
  );
};

export default PreviewCard;
