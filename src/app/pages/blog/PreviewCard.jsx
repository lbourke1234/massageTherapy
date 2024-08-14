import React from "react";
import ClockSvg from "/public/resources/svg/clock.svg";
import Link from "next/link";
import Image from "next/image";
import UserSvg from "/public/resources/svg/user.svg";

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
          alt={data.alt}
          loading="eager"
        />
      </Link>
      <div className="flex-col cm331:flex-row items-start cm331:items-center flex pt-4">
        <Image
          className="hidden cm331:block"
          src={UserSvg}
          alt="user icon"
          height={16}
          width={16}
        />
        <span className="cm1200:text-xl underline ml-1">{data.author} </span>
        <span className="cm331:flex ml-1 items-center gap-1 hidden">
          {" - "}{" "}
          <Image
            className="hidden cm331:block"
            src={ClockSvg}
            alt="user icon"
            height={16}
            width={16}
          />{" "}
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
