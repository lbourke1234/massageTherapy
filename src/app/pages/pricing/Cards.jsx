import React from "react";
import Card from "./Card";
import { pricingData } from "../../data/pricingData";

const Cards = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2em text-center py-4 m-0 text-black font-medium">Pricing</h1>
      <div className="flex flex-wrap text-black pb-4 cmMobile:w-full cm1500:w-3/4 m-auto">
        <Card data={pricingData.bespokeMassage} />
        <Card data={pricingData.buccalMassage} />
        <Card data={pricingData.postureCorrection} />
        <Card data={pricingData.packages} />
      </div>
    </div>
  );
};

export default Cards;
