import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardHeadingTextBtn = ({ heading, src, link, alt }) => {
  return (
    <div className="flex flex-col justify-center cmMobile:p-0 cm800:pb-8">
      <Link href={link}>
        <div className="w-full flex justify-center">
          <Image
            className="cmMobile:h-[200px] cmMobile:w-[200px] cm800:w-[450px] cm800:h-[450px] object-cover shadow-custom rounded-lg"
            src={src}
            alt={alt}
            width={450}
            height={450}
            sizes="(min-width: 800px) 450px, 200px"
            placeholder="blur"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="text-black pt-6 text-2xl font-medium">{heading}</h2>
        </div>
        <hr className="cmMobile:w-[10em] cmMobile:block cm1050:hidden my-6 mx-auto w-[25em]" />
      </Link>
    </div>
  );
};

export default CardHeadingTextBtn;
