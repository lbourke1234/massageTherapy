import React from "react";
import { FaStar } from "react-icons/fa6";

const FiveStarHero = () => {
  return (
    <div className="cm400:justify-center flex flex-wrap items-center cmMobile:mb-2 cm400:mb-0">
      <span className="text-black cmMobile:text-2xl cm600:text-4xl mr-2">5.0 </span>{" "}
      <FaStar className="cm400:text-2xl text-customYellow" />
      <FaStar className="cm400:text-2xl text-customYellow" />
      <FaStar className="cm400:text-2xl text-customYellow" />
      <FaStar className="cm400:text-2xl text-customYellow" />
      <FaStar className="cm400:text-2xl text-customYellow" />
    </div>
  );
};

export default FiveStarHero;
