import React from "react";
import Space from "../about/Space";
import BlogHeading from "./BlogHeading";
import CardsContainer from "./CardsContainer";
import ContactInfo from "../contactInfo/ContactInfo";
import FastNavbar from "@/app/components/nav/FastNavbar";

const BlogMain = () => {
  return (
    <>
      <FastNavbar />
      <Space />
      <BlogHeading />
      <CardsContainer />
      <ContactInfo />
    </>
  );
};

export default BlogMain;
