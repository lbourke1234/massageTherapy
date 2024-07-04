import React from "react";
import ExternalClientButton from "./components/ExternalClientButton";
import Image from "next/image";
import martaImage from "/public/resources/Marta_Osteopath-20.jpg";

const HeroTextLeftImageRight = () => {
  return (
    <div className="flex flex-col bg-[#EFEBE0]">
      <div className="flex flex-wrap">
        <div className="cm1050:h-screen cm1050:basis-1/2 flex basis-full cmMobile:order-2 cm1050:order-1">
          <div className="flex flex-col w-[90%] m-auto cm1050:pt-44 cmMobile:pb-8 cmMobile:pt-6 cm1050:px-8 ">
            <h1 className="cmMobile:text-2em cm600:text-3em text-black font-medium">
              MASSAGE THERAPY AND NUTRITIONAL ADVICE TAILORED TO YOUR NEEDS
            </h1>
            <h2 className="text-black text-2xl">
              A Central London clinic offering a personalised approach to health
            </h2>
            <ExternalClientButton />
          </div>
        </div>
        <div className="cmMobile:p-4 cm1050:p-0 cm1050:basis-1/2 basis-full cm1050:h-screen order-1 cm1050:order-2 cm992:mt-0 cmMobile:mt-14">
          <Image
            className=" cmMobile:object-[-130px] cm450:object-[0px] cmMobile:h-[500px] cm800:h-full cmMobile:rounded-3xl cm1050:rounded-none object-cover cm1050:object-[-210px]"
            src={martaImage}
            alt="Marta Suchanska, massage therapist based in London"
            width={1294}
            height={1280}
            sizes="(min-width: 2660px) 1260px, (min-width: 1060px) calc(46.2vw + 40px), calc(100vw - 32px)"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTextLeftImageRight;
