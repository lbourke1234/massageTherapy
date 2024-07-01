import React from "react";
import { packageData } from "../../data/treatmentData";

const HowDoesItWork = ({ data }) => {
  return (
    <div
      className="h-full bg-[#EFEBE0] text-black flex flex-col justify-center items-center py-4"
      key={data.key}
    >
      <div className="cmMobile:w-[90%] cm800:w-[70%]">
        <p className="cmMobile:text-2xl cm800:text-2em mb-4">How does it work?</p>
        <p className="cmMobile:text-1em cm800:text-xl mb-4">
          I created Packages to help you get the most out of your personal experience. Each bundle
          combines massage therapy with another tool to enhance the many benefits of your session.
        </p>
        {packageData.map((data, index) => (
          <div key={index}>
            <p className="cmMobile:underline cm800:no-underline cmMobile:text-1em cm800:text-2xl font-semibold">
              {data.heading}
            </p>
            <p className="cmMobile:text-1em cm800:text-xl">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDoesItWork;
