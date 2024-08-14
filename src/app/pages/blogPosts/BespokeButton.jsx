import Link from "next/link";
import React from "react";

const BespokeButton = () => {
  return (
    <Link
      href={"/booking"}
      className="py-[0.7rem] px-[2.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105"
    >
      Book Now!
    </Link>
  );
};

export default BespokeButton;
