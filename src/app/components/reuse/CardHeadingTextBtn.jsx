import React from "react";
import Link from "next/link";

const CardHeadingTextBtn = ({ heading, src, link, alt }) => {
  return (
    <div className="flex flex-col justify-center cmMobile:p-0 cm800:pb-8">
      <Link href={link}>
        <div className="w-full flex justify-center">
          <img
            className="cmMobile:h-[200px] cmMobile:w-[200px] cm800:w-[450px] cm800:h-[450px] object-cover shadow-custom rounded-lg"
            src={src}
            alt={alt}
          />
        </div>
        <div className="card-body text-center">
          <h2 className="text-black pt-6 text-2xl">{heading}</h2>
        </div>
        <hr className="cmMobile:w-[10em] cmMobile:block cm1050:hidden my-6 mx-auto w-[25em]" />
      </Link>
    </div>
  );
};

export default CardHeadingTextBtn;
