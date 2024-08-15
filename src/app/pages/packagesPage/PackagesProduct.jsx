import React from "react";
import Space from "../about/Space";
import Content from "./Content";
import ContactInfo from "../contactInfo/ContactInfo";
import FastNavbar from "@/app/components/nav/FastNavbar";

const PackagesProduct = ({ data }) => {
  return (
    <>
      <FastNavbar />
      <Space />
      <Content data={data} />
      <ContactInfo />
    </>
  );
};

export default PackagesProduct;
