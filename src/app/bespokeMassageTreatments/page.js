import React from "react";
import { treatmentData } from "../data/treatmentData";
import Product from "../pages/productPage/Product";

const page = () => {
  return <Product data={treatmentData[0]} />;
};

export default page;
