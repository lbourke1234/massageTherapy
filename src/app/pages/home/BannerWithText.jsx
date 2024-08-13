import React from "react";
import ExternalClientButton from "./components/ExternalClientButton";
import Picture from "/public/resources/Marta_Osteopath-276.jpg";
import Image from "next/image";

const BannerWithText = () => {
  return (
    <div className="h-full cm400:h-[80vh] relative">
      <Image
        src={Picture}
        className="object-cover w-full h-full"
        layout="fill"
        placeholder="blur"
        alt="Marta's hands displayed in a peaceful and relaxing way"
        sizes="100vw"
      />
      <div className=" cmMobile:text-center cm1300:text-left relative top-0 left-0 w-full h-full bg-blackOpacity20 flex flex-col justify-center items-center py-4 cm400:p-0">
        <div className="w-[90%] cm800:w-3/5">
          <h3 className="text-2em cm800:text-3em text-white mb-2 font-medium">
            “The body has an unlimited capacity for repair and regeneration”.
          </h3>
          <p className="cm800:text-2xl text-white italic mb-4">Andrew Taylor Still</p>
          <ExternalClientButton />
        </div>
      </div>
    </div>
  );
};

export default BannerWithText;
