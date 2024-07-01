"use client";

import React from "react";

const ProductExternalButton = ({ data }) => {
  return (
    <div className="w-[70%] m-auto py-4" key={data.key}>
      <button
        className="py-[0.7rem] px-[2.75rem] border-2 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
        onClick={() => window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank")}
      >
        Book Now!
      </button>
    </div>
  );
};

export default ProductExternalButton;
