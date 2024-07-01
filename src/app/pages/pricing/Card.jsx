import React from "react";
import PricingButton from "./PricingButton";

const Card = ({ data }) => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <div className="cmMobile:basis-full cm1050:basis-1/2 pr-6 pb-6 pl-6 rounded-2xl flex flex-col items-center justify-between">
      <div>
        <div className="w-auto flex justify-center">
          <img
            className="cmMobile:h-[200px] cmMobile:w-[200px] cm500:w-[300px] cm500:h-[300px] cm800:h[450px] cm800:w[450px] object-cover shadow-custom rounded-lg"
            src={data.src}
          />
        </div>
        <h2 className="font-medium pt-4 text-2xl pb-2">{data.heading}</h2>
        {data.bullets.map((bullet, index) => {
          return <p key={index}>{bullet}</p>;
        })}
      </div>
      <PricingButton />
      <hr className="cmMobile:w-[10em] cm500:w-[15em] cmMobile:block cm1050:hidden mt-4 mx-auto cm1050:w-[27em]" />
    </div>
  );
};

export default Card;
