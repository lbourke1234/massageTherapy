"use client";

import React from "react";
import { GrInstagram } from "react-icons/gr";

const InstagramIcon = () => {
  return (
    <GrInstagram
      className={` hover:cursor-pointer`}
      onClick={() => window.open("https://www.instagram.com/massagetherapy.london/", "_blank")}
    />
  );
};

export default InstagramIcon;
