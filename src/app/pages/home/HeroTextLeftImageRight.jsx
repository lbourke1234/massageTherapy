import React from "react";
import Image from "next/image";
import martaImage from "/public/resources/webp/Marta_Osteopath-20.webp";
import GoogleSVG from "./components/GoogleSVG";
import FiveStarHero from "@/app/components/reuse/FiveStarHero";
import TreatWellLogo from "/public/resources/Treatwell_idHx-s1Ql7_2.png";
import GoogleSVGMobile from "./components/GoogleSVGMobile";
import HeroButtonReverse from "./components/HeroButtonReverse";
import HeroButtomMain from "./HeroButtomMain";

const HeroTextLeftImageRight = () => {
  return (
    <div className="flex flex-col bg-[#EFEBE0]">
      <div className="flex flex-wrap">
        <div className="cm1050:h-screen cm1050:basis-1/2 flex basis-full cmMobile:order-2 cm1050:order-1">
          <div className="flex flex-col w-[90%] m-auto cm1050:pt-44 cmMobile:pb-8 cmMobile:pt-6 cm1050:px-8">
            <div className="">
              <h1 className="cmMobile:text-2em cm600:text-3em text-black font-medium mb-2">
                MASSAGE THERAPY IN MARYLEBONE LONDON
              </h1>
              <h2 className="text-black cmMobile:text-[1.5em] cm600:text-2xl">
                Harley Street located clinic offering professional massage therapy services
              </h2>
              <div className="flex gap-4">
                <HeroButtomMain />
                <div className="cmMobile:hidden cm450:block">
                  <HeroButtonReverse />
                </div>
              </div>
            </div>
            {/* bottom here */}
            <div className="mt-4">
              <div className="flex gap-12 items-center ">
                <FiveStarHero />
                <span className="text-black cm400:text-2xl cmMobile:mb-2 cm400:mb-0">
                  220+ reviews
                </span>
              </div>
              <div className="flex items-center gap-16 ">
                <div className="hidden cm400:block">
                  <Image
                    src={TreatWellLogo}
                    alt="Treatwell logo displayed on desktop view"
                    height={150}
                    width={150}
                    className="mb-2 cm400:mb-0 "
                  />
                </div>
                <div className="block cm400:hidden">
                  <Image
                    src={TreatWellLogo}
                    alt="Treatwell logo displayed on mobile view"
                    height={110}
                    width={110}
                    className=" cmMobile:mb-2 cm400:mb-0"
                  />
                </div>
                <div>
                  <div className="hidden cm400:block">
                    <GoogleSVG />
                  </div>
                  <div className="cm400:hidden block">
                    <GoogleSVGMobile />
                  </div>
                </div>
              </div>
            </div>
            {/* bottom above */}
          </div>
        </div>
        <div className="cmMobile:p-4 cm1050:p-0 cm1050:basis-1/2 basis-full cm1050:h-screen order-1 cm1050:order-2 cm992:mt-0 cmMobile:mt-14">
          <Image
            className=" cmMobile:object-[-130px] cm450:object-[0px] cmMobile:h-[500px] cm800:h-full cmMobile:rounded-3xl cm1050:rounded-none object-cover cm1050:object-[-210px]"
            src={martaImage}
            alt="Marta, the London-based massage therapist specializing in sports massage, deep tissue, and relaxation techniques"
            width={1294}
            height={1280}
            sizes="(min-width: 2740px) 1294px, (min-width: 1060px) calc(46.02vw + 42px), calc(100vw - 32px)"
            placeholder="blur"
            quality={100}
            priority
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTextLeftImageRight;
