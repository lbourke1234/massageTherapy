"use client";

import React from "react";
import { GrInstagram } from "react-icons/gr";

const InstagramIcon = () => {
  return (
    <GrInstagram
      className={` hover:cursor-pointer`}
      onClick={() => window.open("https://www.linkedin.com/in/marta-suchanska-aa3301283", "_blank")}
    />
  );
};

export default InstagramIcon;
