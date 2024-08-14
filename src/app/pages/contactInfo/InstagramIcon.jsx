"use client";

import React from "react";
import Insta from "/public/resources/svg/instagram.svg";
import Image from "next/image";

const InstagramIcon = () => {
  return (
    <Image
      onClick={() => window.open("https://www.instagram.com/massagetherapy.london/", "_blank")}
      className="hover:cursor-pointer"
      src={Insta}
      alt="linked in icon"
      height={16}
      width={16}
    />
    // <GrInstagram
    //   className={` hover:cursor-pointer`}
    //   onClick={() => window.open("https://www.instagram.com/massagetherapy.london/", "_blank")}
    // />
  );
};

export default InstagramIcon;
