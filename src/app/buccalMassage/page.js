import React from "react";
import Product from "../pages/productPage/Product";
import { treatmentData } from "../data/treatmentData";

const page = () => {
  return <Product data={treatmentData[1]} />;
};

export default page;
