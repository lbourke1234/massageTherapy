"use client";

import React from "react";
import { GrPhone } from "react-icons/gr";

const ContactIcon = () => {
  return (
    <GrPhone
      className={` hover:cursor-pointer`}
      onClick={() => window.open("https://www.linkedin.com/in/marta-suchanska-aa3301283", "_blank")}
    />
  );
};

export default ContactIcon;
