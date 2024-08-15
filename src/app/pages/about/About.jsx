import React from "react";
import Content from "./Content";
import Space from "./Space";
import ContactInfo from "../contactInfo/ContactInfo";
import FastNavbar from "@/app/components/nav/FastNavbar";

const About = () => {
  return (
    <>
      <FastNavbar />
      <Space />
      <Content />
      <ContactInfo />
    </>
  );
};

export default About;
