import React from "react";
import Navbar from "../../components/nav/Navbar";
import Content from "./Content";
import Space from "./Space";
import ContactInfo from "../contactInfo/ContactInfo";

const About = () => {
  return (
    <>
      <Navbar />
      <Space />
      <Content />
      <ContactInfo />
    </>
  );
};

export default About;
