import React from "react";
import PreviewCard from "./PreviewCard";
import { blogData } from "../../data/blogData";

const CardsContainer = () => {
  return (
    <div className="w-full cm1200:w-[70%] m-auto flex flex-wrap">
      <PreviewCard data={blogData.bespokeMassageTreatment} />
      <PreviewCard data={blogData.youAreWhatYouEat} />
    </div>
  );
};

export default CardsContainer;
