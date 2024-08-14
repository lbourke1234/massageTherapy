import Image from "next/image";
import React from "react";
import StarSvg from "/public/resources/svg/star.svg";

const FiveStarHero = () => {
  return (
    <div className="cm400:justify-center flex flex-wrap items-center cmMobile:mb-2 cm400:mb-0">
      <span className="text-black cmMobile:text-2xl cm600:text-4xl mr-2">5.0 </span>{" "}
      <div className="cmMobile:hidden cm400:flex justify-center items-center">
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={24}
          width={24}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={24}
          width={24}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={24}
          width={24}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={24}
          width={24}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={24}
          width={24}
        />
      </div>
      <div className="cmMobile:flex cm400:hidden justify-center items-center">
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={16}
          width={16}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={16}
          width={16}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={16}
          width={16}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={16}
          width={16}
        />
        <Image
          className="cm400:text-2xl text-customYellow"
          src={StarSvg}
          alt="user icon"
          height={16}
          width={16}
        />
      </div>
    </div>
  );
};

export default FiveStarHero;
