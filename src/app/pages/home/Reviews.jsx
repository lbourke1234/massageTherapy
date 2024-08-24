import React from "react";
import ReviewCard from "../../components/ReviewCard";
import { testimonialData } from "../../data/testimonialData";

const Reviews = () => {
  return (
    <div className="flex flex-col bg-[#EFEBE0]">
      <div className="flex flex-col w-[90%] m-auto py-8">
        <h4 className="text-black text-center text-2xl lg:text-2em font-medium">Testimonials</h4>
        <div className="flex flex-wrap">
          {testimonialData.map((review, key) => (
            <div
              className="cmMobile:basis-full cmMobile:m-0 cm900:mx-20 cm1300:m-0  cm1300:basis-1/3"
              key={key}
            >
              <ReviewCard name={review.name} location={review.subHeading} text={review.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
