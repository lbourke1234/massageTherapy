import React from "react";
import Navbar from "../../components/nav/Navbar";
import Space from "../about/Space";
import BlogHeading from "./BlogHeading";
import CardsContainer from "./CardsContainer";
import ContactInfo from "../contactInfo/ContactInfo";

const BlogMain = () => {
  return (
    <>
      <Navbar />
      <Space />
      <BlogHeading />
      <CardsContainer />
      <ContactInfo />
    </>
  );
};

export default BlogMain;
