import React from "react";
import PreviewCard from "./PreviewCard";
import { blogData } from "../../data/blogData";

const CardsContainer = () => {
  return (
    <div className="w-full cm1200:w-[70%] m-auto flex flex-wrap">
      <PreviewCard data={blogData.bespokeMassageTreatment} />
      <PreviewCard data={blogData.youAreWhatYouEat} />
      <PreviewCard data={blogData.completeGuideToTheBenefitsOfBuccalMassage} />
      <PreviewCard data={blogData.mld} />
      <PreviewCard data={blogData.sportsMassage} />
      <PreviewCard data={blogData.pregnancy} />
    </div>
  );
};

export default CardsContainer;
