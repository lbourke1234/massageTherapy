"use client";

import React from "react";
import styled from "styled-components";
import { ContainerFluid, Row } from "../../styledComponents/Containers";
import Card from "./Card";
import { pricingData } from "../../data/pricingData";

const StyledContainer = styled(Row)`
  color: black;
  padding-bottom: 1em;
  width: 75%;
  margin: auto;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;
const Heading = styled.h2`
  font-size: 2em;
  text-align: center;
  padding: 1em 0;
  margin: 0;
  color: black;
`;

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
