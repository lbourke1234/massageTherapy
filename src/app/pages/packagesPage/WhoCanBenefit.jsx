import React from "react";

const WhoCanBenefit = ({ data }) => {
  return (
    <div
      className=" cmMobile:py-8 m-auto bg-[#EFEBE0] text-black flex flex-col justify-center items-center"
      key={data.key}
    >
      <div className="cmMobile:w-[90%] cm800:w-[70%]">
        <p className="cmMobile:text-2xl cm800:text-2em">Who can benefit from it?</p>
        {data.whoCanBenefit.map((bullet, index) => (
          <p className="cmMobile:text-1em cm800:text-xl" key={index}>
            {bullet}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhoCanBenefit;
