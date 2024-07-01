// "use client";

import React from "react";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import Link from "next/link";
import ProductExternalButton from "./ProductExternalButton";

const Content = ({ data }) => {
  return (
    <div className="m-auto text-black" key={data.key}>
      <Link href={"/#services"}>
        <div className="flex cmMobile:justify-end cm1050:justify-start p-4">
          <button className="py-[0.7rem] px-[2.75rem] border-2 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </div>
      </Link>
      <h2 className="cmMobile:p-0 pb-4 text-2em text-center">{data.name}</h2>
      <Top data={data} />
      <HowDoesItWork data={data} />
      <Benefits data={data} />
      <WhoCanBenefit data={data} />
      <ProductExternalButton data={data} />
    </div>
  );
};

export default Content;
