import Image from "next/image";
import React from "react";
import Picture from "/public/resources/Marta_Osteopath-403.jpg";

const Banner = () => {
  return (
    <Image
      className="
  flex flex-col h-[70vh] justify-center items-center bg-center bg-no-repeat bg-cover object-cover"
      height={905.797}
      width={2560}
      placeholder="blur"
      src={Picture}
      sizes="(min-width: 2700px) 2560px, calc(94.96vw + 15px)"
      alt="Facial massage performed by a massage therapist for relaxation and rejuvenation"
    />
  );
};

export default Banner;
