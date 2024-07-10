import React from "react";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import Image from "next/image";

const PreviewCard = ({ data }) => {
  return (
    <div className="basis-full cm992:basis-1/2 text-black p-4">
      <Link href={data.link}>
        <Image
          className="w-full h-[500px] object-cover rounded-3xl hover:cursor-pointer"
          src={data.image}
          height={500}
          width={848}
          sizes="(min-width: 1200px) calc(35vw - 48px), (min-width: 1000px) calc(50vw - 48px), calc(100vw - 48px)"
          placeholder="blur"
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
        <h2 className="text-2xl cm1200:text-[2rem] pb-1 pt-2 hover:cursor-pointer font-semibold">
          {data.title}
        </h2>
      </Link>
      <span className="text-[1.3em]">{data.preview}</span>
    </div>
  );
};

export default PreviewCard;
