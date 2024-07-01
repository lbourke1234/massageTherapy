import React from "react";
import FiveStarReview from "./FiveStarReview";

const ReviewCard = ({ name, location, text }) => {
  return (
    <div className="bg-white cmMobile:p-4 cm900:p-10 shadow-custom cmMobile:my-8 cm900:m-8 cm900:h-[40em] text-black rounded-2xl">
      <p className="cmMobile:text-2xl cm800:text-2em text-center">{name}</p>
      <p className="font-medium">{location}</p>
      <FiveStarReview />
      <p className="text-justify">{text}</p>
    </div>
  );
};

export default ReviewCard;
