import React from "react";
import Product from "../pages/productPage/Product";
import { treatmentData } from "../data/treatmentData";

export const metadata = {
  title: "Nutritional Advice Service: Expert Guidance for Healthy Eating",
  description:
    "Receive personalized nutritional advice from experts to improve your diet and overall health. Our service offers tailored guidance on healthy eating, meal planning, and wellness strategies.",
};

const page = () => {
  return <Product data={treatmentData[2]} />;
};

export default page;
