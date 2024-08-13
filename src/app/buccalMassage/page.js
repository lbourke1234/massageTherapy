import React from "react";
import Product from "../pages/productPage/Product";
import { treatmentData } from "../data/treatmentData";

export const metadata = {
  title: "Buccal Massage in London, Enhance Your Jawline",
  description:
    "Buccal massage is a specialized technique that involves the manual manipulation of facial muscles through the inside of the mouth.",
};

const page = () => {
  return <Product data={treatmentData[1]} />;
};

export default page;
