import React from "react";

const WhoCanBenefit = ({ data }) => {
  return (
    <div
      className=" cmMobile:py-8 m-auto bg-[#EFEBE0] text-black flex flex-col justify-center items-center"
      key={data.key}
    >
      <div className="cmMobile:w-[90%] cm800:w-[70%]">
        <p className="cmMobile:text-2xl cm800:text-2em">Who can benefit from it?</p>
        {data.whoCanBenefit.map((bullet, inx) => {
          const index = bullet.indexOf("Happy guts package");
          if (index !== -1) {
            return (
              <p className="cmMobile:text-1em cm800:text-xl" key={inx}>
                {bullet.substring(0, index)}
                <strong>Happy guts package</strong>
                {bullet.substring(index + "Happy guts package".length)}
              </p>
            );
          }
          return (
            <p className="cmMobile:text-1em cm800:text-xl" key={inx}>
              {bullet}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default WhoCanBenefit;
