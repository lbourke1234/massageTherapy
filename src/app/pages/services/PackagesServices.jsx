import FastNavbar from "@/app/components/nav/FastNavbar";
import Link from "next/link";
import React from "react";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import ContactInfo from "../contactInfo/ContactInfo";
import Heading3 from "../blogPosts/components/Heading3";
import Paragraph from "../blogPosts/components/Paragraph";

const PackagesServices = ({ data }) => {
  return (
    <>
      <FastNavbar />
      <div className="cm992:h-48 h-16"></div>
      <div className="m-auto text-black" key={data.key}>
        <Link href={"/#services"}>
          <div className="cm992:absolute cmMobile:flex top-[150px] left-0 cmMobile:justify-end cm1050:justify-start px-4">
            <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] bg-white text-black bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
              Back
            </button>
          </div>
        </Link>
        <h1 className="cmMobile:px-3 pb-4 md:pb-12 cm800:text-2em cmMobile:text-2xl text-center">
          {data.name}
        </h1>
        <Top data={data} />
        <div
          className="h-full bg-[#EFEBE0] text-black flex flex-col justify-center items-center py-8"
          key={data.key}
        >
          <div className="cmMobile:w-[90%] cm800:w-[70%]">
            <p className="cmMobile:text-2xl cm800:text-2em mb-4">How does it work?</p>
            {/* {data.howDoesItWork.map((text, index) => (
              <p className="cmMobile:text-1em cm800:text-xl" key={index}>
                {text}
              </p>
            ))} */}
            <h3 className="cm800:text-2xl text-xl font-medium">
              Packages for a Customized, Therapeutic Experience
            </h3>
            <Paragraph>
              I offer specialized packages designed to maximize the benefits of your massage therapy
              experience. Each package blends massage with additional tools to support your wellness
              journey. Choose between a 90-minute or 120-minute session tailored to your goals.
            </Paragraph>
            <h3 className="cm800:text-2xl text-xl font-medium">Distress Package</h3>
            <Paragraph>
              This package is all about promoting calm through tailored breathing and relaxation
              techniques that you can incorporate into your daily life. Together, we will identify
              the techniques that best suit your needs and focus on the areas where you hold the
              most tension.
            </Paragraph>
            <h3 className="cm800:text-2xl text-xl font-medium">Move Without Pain Package</h3>
            <Paragraph>
              Enhance your mobility and flexibility with this package. After an initial posture
              assessment, we will pinpoint the specific areas in need of attention to help improve
              your mobility and flexibility. This approach not only eases discomfort but also
              supports smoother movement and better alignment in your day-to-day life.
            </Paragraph>
            <h3 className="cm800:text-2xl text-xl font-medium">Happy Gut Package</h3>
            <Paragraph>
              {`Improve your overall well-being with a focus on nutrition and digestive health.
              Through this package, we will explore nutritional changes that work for your body,
              aiming to increase energy, reduce discomfort, and even support weight loss. I will
              provide guidance on recognizing your body's unique nutritional needs to help you feel
              your best.`}
            </Paragraph>
          </div>
        </div>
        <Benefits data={data} />
        <WhoCanBenefit data={data} />
        <div className="w-[70%] m-auto py-4 mt-4">
          <Link href={"/booking"}>
            <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] bg-white text-black bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
              Book Now!
            </button>
          </Link>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default PackagesServices;
