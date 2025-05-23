"use client";

import Link from "next/link";
import React from "react";

const ProductExternalButton = ({ data }) => {
  return (
    <div className="w-[70%] m-auto py-4" key={data.key}>
      <Link
        href={"/booking"}
        className="py-[0.7rem] px-[2.75rem] border leading-[1.5] bg-white text-black bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
      >
        Book Now!
      </Link>
    </div>
  );
};

export default ProductExternalButton;
