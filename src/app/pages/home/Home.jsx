import React from "react";
import Treatments from "./Treatments";
import ContactForm from "../../components/contactMe/ContactForm";
import Reviews from "./Reviews";
import HeroTextLeftImageRight from "./HeroTextLeftImageRight";
import ContactInfo from "../contactInfo/ContactInfo";
import BannerWithText from "./BannerWithText";
import Navbar from "../../components/nav/Navbar";
import BookingInterface from "./BookingInterface";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroTextLeftImageRight />
      <Treatments />
      <Reviews />
      {/* <BookingInterface /> */}
      <BannerWithText />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default Home;
