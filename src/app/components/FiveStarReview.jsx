import React from "react";

import { FaStar } from "react-icons/fa6";

const FiveStarReview = () => {
  return (
    <div className="justify-center pb-4 flex flex-wrap">
      <FaStar className="text-2xl text-customYellow" />
      <FaStar className="text-2xl text-customYellow" />
      <FaStar className="text-2xl text-customYellow" />
      <FaStar className="text-2xl text-customYellow" />
      <FaStar className="text-2xl text-customYellow" />
    </div>
  );
};

export default FiveStarReview;
