import FastNavbar from "@/app/components/nav/FastNavbar";
import Bold from "@/app/pages/blogPosts/components/Bold";
import ListItem from "@/app/pages/blogPosts/components/ListItem";
import UnorderedList from "@/app/pages/blogPosts/components/UnorderedList";
import ContactInfo from "@/app/pages/contactInfo/ContactInfo";
import Benefits from "@/app/pages/packagesPage/Benefits";
import HowDoesItWork from "@/app/pages/packagesPage/HowDoesItWork";
import Top from "@/app/pages/packagesPage/Top";
import WhoCanBenefit from "@/app/pages/packagesPage/WhoCanBenefit";
import Link from "next/link";
import React from "react";

const PostureServices = ({ data }) => {
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
          className="h-full bg-[#EFEBE0] text-black flex flex-col justify-center items-center py-4"
          key={data.key}
        >
          <div className="cmMobile:w-[90%] cm800:w-[70%]">
            <p className="cmMobile:text-2xl cm800:text-2em mb-4">How does it work?</p>
            <p className="cmMobile:text-1em cm800:text-xl mb-4">
              Our Posture Correction therapy begins with a detailed postural assessment to identify
              areas of imbalance and strain. Using advanced manual techniques, we release tension in
              tight muscles, lengthen shortened areas, and strengthen underused ones. Techniques
              such as deep tissue massage, myofascial release, and targeted mobilization are
              employed to realign your body and restore balance. We provide expert guidance on
              posture-friendly practices to help you maintain your results over time.
            </p>
            {data.howDoesItWork.map((data, index) => (
              <div key={index}>
                <p className="cmMobile:underline cm800:no-underline cmMobile:text-1em cm800:text-2xl font-semibold">
                  {data.heading}
                </p>
                <p className="cmMobile:text-1em cm800:text-xl">{data.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-[90%] m-auto flex flex-col justify-center items-center cmMobile:py-8"
          key={data.key}
        >
          <p className="cmMobile:text-2xl cm800:text-2em">
            Benefits of Posture Correction Therapy:
          </p>
          <div className="flex">
            <ul className="list-disc">
              {data.benefits.map((benefit, key) => (
                <li className="cmMobile:text-1em cm800:text-xl ml-8" key={key}>
                  {benefit}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className=" cmMobile:py-8 m-auto bg-[#EFEBE0] text-black flex flex-col justify-center items-center"
          key={data.key}
        >
          <div className="cmMobile:w-[90%] cm800:w-[70%]">
            <p className="cmMobile:text-2xl cm800:text-2em">Who can benefit from it?</p>
            {data.whoCanBenefit.map((bullet, index) => (
              <p className="cmMobile:text-1em cm800:text-xl" key={index}>
                {bullet}
              </p>
            ))}
            <UnorderedList>
              {data.whoCanBenefitList.map((bullet, index) => (
                <ListItem key={index}>{bullet}</ListItem>
              ))}
            </UnorderedList>
            <p className="cmMobile:text-1em cm800:text-xl">
              If you are located outside of London, you can choose <Bold>an online session</Bold>{" "}
              that includes a comprehensive posture assessment, guidance on self-massage techniques,
              and personalized exercise recommendations.
            </p>
          </div>
        </div>
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

export default PostureServices;
