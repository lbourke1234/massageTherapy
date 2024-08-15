import React from "react";
import Content from "./Content";
import Banner from "./Banner";
import Cards from "./Cards";
import ContactInfo from "../contactInfo/ContactInfo";
import FastNavbar from "@/app/components/nav/FastNavbar";

const Pricing = () => {
  return (
    <>
      <FastNavbar />
      <Banner />
      <Cards />
      <Content />
      <ContactInfo />
    </>
  );
};

export default Pricing;
