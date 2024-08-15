import React from "react";
import Treatments from "./Treatments";
import ContactForm from "../../components/contactMe/ContactForm";
import Reviews from "./Reviews";
import HeroTextLeftImageRight from "./HeroTextLeftImageRight";
import ContactInfo from "../contactInfo/ContactInfo";
import BannerWithText from "./BannerWithText";
import FastNavbar from "@/app/components/nav/FastNavbar";

const Home = () => {
  return (
    <>
      <FastNavbar />
      <HeroTextLeftImageRight />
      <Treatments />
      <Reviews />
      <BannerWithText />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default Home;
