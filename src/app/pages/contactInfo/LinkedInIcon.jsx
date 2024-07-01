"use client";

import React from "react";
import { GrLinkedin } from "react-icons/gr";

const LinkedInIcon = () => {
  return (
    <GrLinkedin
      className={` hover:cursor-pointer mx-4`}
      onClick={() => window.open("https://www.linkedin.com/in/marta-suchanska-aa3301283", "_blank")}
    />
  );
};

export default LinkedInIcon;
