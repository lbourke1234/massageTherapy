"use client";

import React from "react";
import LinkedInPicture from "/public/resources/svg/linkedin.svg";
import Image from "next/image";

const LinkedInIcon = () => {
  return (
    <Image
      onClick={() => window.open("https://www.linkedin.com/in/marta-suchanska-aa3301283", "_blank")}
      className="hover:cursor-pointer mx-4"
      src={LinkedInPicture}
      alt="linked in icon"
      height={16}
      width={16}
    />
  );
};

export default LinkedInIcon;
