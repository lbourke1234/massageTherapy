import React from "react";
import Space from "../about/Space";
import Navbar from "../../components/nav/Navbar";
import Content from "./Content";
import ContactInfo from "../contactInfo/ContactInfo";

const PackagesProduct = ({ data }) => {
  return (
    <>
      <Navbar />
      <Space />
      <Content data={data} />
      <ContactInfo />
    </>
  );
};

export default PackagesProduct;
