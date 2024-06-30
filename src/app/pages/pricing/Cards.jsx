"use client";

import React from "react";
import { ContainerFluid } from "../../styledComponents/Containers";
import Card from "./Card";
import { pricingData } from "../../data/pricingData";
import { Heading, StyledContainer } from "./SCards";

const Cards = () => {
  return (
    <ContainerFluid>
      <Heading>Pricing</Heading>
      <StyledContainer>
        <Card data={pricingData.bespokeMassage} />
        <Card data={pricingData.buccalMassage} />
        <Card data={pricingData.nutritionalAdvice} />
        <Card data={pricingData.packages} />
      </StyledContainer>
    </ContainerFluid>
  );
};

export default Cards;
