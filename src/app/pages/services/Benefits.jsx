import React from "react";

const Benefits = ({ data }) => {
  return (
    <div
      className="w-[90%] m-auto flex flex-col justify-center items-center cmMobile:py-8"
      key={data.key}
    >
      <p className="cmMobile:text-2xl cm800:text-2em">Benefits:</p>
      <div className="flex">
        <ul className="list-disc">
          {data.benefits.map((benefit, key) => (
            <li className="cmMobile:text-1em cm800:text-xl ml-8 pb-2" key={key}>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
