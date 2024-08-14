import Image from "next/image";
import React from "react";
import StarSvg from "/public/resources/svg/star.svg";

const FiveStarReview = () => {
  return (
    <div className="justify-center pb-4 flex flex-wrap">
      <Image
        className="text-2xl text-customYellow"
        src={StarSvg}
        alt="user icon"
        height={24}
        width={24}
      />
      <Image
        className="text-2xl text-customYellow"
        src={StarSvg}
        alt="user icon"
        height={24}
        width={24}
      />
      <Image
        className="text-2xl text-customYellow"
        src={StarSvg}
        alt="user icon"
        height={24}
        width={24}
      />
      <Image
        className="text-2xl text-customYellow"
        src={StarSvg}
        alt="user icon"
        height={24}
        width={24}
      />
      <Image
        className="text-2xl text-customYellow"
        src={StarSvg}
        alt="user icon"
        height={24}
        width={24}
      />
    </div>
  );
};

export default FiveStarReview;
