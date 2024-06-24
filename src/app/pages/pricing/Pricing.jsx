import React from "react";
import Content from "./Content";
import Navbar from "../../components/nav/Navbar";
import Banner from "./Banner";
import Cards from "./Cards";
import ContactInfo from "../contactInfo/ContactInfo";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Content />
      <ContactInfo />
    </>
  );
};

export default Pricing;
