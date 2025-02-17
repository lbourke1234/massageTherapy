import Image from "next/image";
import React from "react";

const Top = ({ data }) => {
  return (
    <div className="flex flex-wrap pb-4">
      <div className="cm800:basis-1/2 basis-full flex flex-col justify-center items-center cm800:order-1 cmMobile:order-2 w-full ">
        <div className="w-[70%]">
          <p className="cm800:text-2em cmMobile:text-2xl cm800:pt-0 cmMobile:pt-4">
            {data.heading}
          </p>
          <p className="italic cmMobile:text-1em cm800:text-lg">{data.subHeading}</p>
        </div>
      </div>
      <div className="cmMobile:basis-full cm800:basis-1/2 pr-4 w-full order-1 p-3 cm800:p-0">
        <Image
          className="cmMobile:h-[550px] w-full cmMobile:basis-full rounded-3xl shadow-custom object-cover h-[60vh]"
          src={data.subImage}
          width={1248}
          height={550}
          sizes="(min-width: 800px) calc(50vw - 48px), calc(100vw - 48px)"
          placeholder="blur"
          alt={data.subImageAlt}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Top;
