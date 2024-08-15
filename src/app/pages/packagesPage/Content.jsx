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
        <div className="cm992:absolute cmMobile:flex top-[150px] left-0 cmMobile:justify-end cm1050:justify-start px-4">
          <button className="py-[0.7rem] px-[2.75rem] border-1 leading-[1.5] text-white bg-[#8F8D86] bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </div>
      </Link>
      <h1 className="cmMobile:p-0 pb-2 cm800:text-2em cmMobile:text-2xl text-center">
        {data.name}
      </h1>
      <Top data={data} />
      <HowDoesItWork data={data} />
      <Benefits data={data} />
      <WhoCanBenefit data={data} />
      <ProductExternalButton data={data} />
    </div>
  );
};

export default Content;
