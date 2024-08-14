import Image from "next/image";
import React from "react";
import Phone from "/public/resources/svg/phone.svg";

const ContactIcon = () => {
  return (
    <>
      <Image className="hover:cursor-pointer" src={Phone} alt="phone icon" height={16} width={16} />
    </>
  );
};

export default ContactIcon;
