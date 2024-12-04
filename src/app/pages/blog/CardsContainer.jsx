import React from "react";
import PreviewCard from "./PreviewCard";
import { blogData } from "../../data/blogData";

const CardsContainer = () => {
  return (
    <div className="w-full cm1200:w-[70%] m-auto flex flex-wrap">
      <PreviewCard data={blogData.postureCorrection} />
      <PreviewCard data={blogData.tmj} />
      <PreviewCard data={blogData.lowBackPain2} />
      <PreviewCard data={blogData.LowBackPain} />
      <PreviewCard data={blogData.neckPain} />
      <PreviewCard data={blogData.myofascialRelease} />
      <PreviewCard data={blogData.deepTissueVsSports} />
      <PreviewCard data={blogData.pregnancy} />
      <PreviewCard data={blogData.sportsMassage} />
      <PreviewCard data={blogData.mld} />
      <PreviewCard data={blogData.completeGuideToTheBenefitsOfBuccalMassage} />
      <PreviewCard data={blogData.bespokeMassageTreatment} />
      <PreviewCard data={blogData.youAreWhatYouEat} />
    </div>
  );
};

export default CardsContainer;
