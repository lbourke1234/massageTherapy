import React from "react";

const HowDoesItWork = ({ data }) => {
  return (
    <div
      className="h-full bg-[#EFEBE0] text-black flex flex-col justify-center items-center py-8"
      key={data.key}
    >
      <div className="cmMobile:w-[90%] cm800:w-[70%]">
        <p className="cmMobile:text-2xl cm800:text-2em mb-4">How does it work?</p>
        {data.howDoesItWork.map((text, index) => (
          <p className="cmMobile:text-1em cm800:text-xl" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HowDoesItWork;
