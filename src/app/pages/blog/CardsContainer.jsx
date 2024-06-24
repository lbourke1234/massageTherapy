"use client";

import React from "react";
import PreviewCard from "./PreviewCard";
import styled from "styled-components";
import { blogData } from "../../data/blogData";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: auto;
  }
`;

const CardsContainer = () => {
  return (
    <Container>
      <PreviewCard data={blogData.bespokeMassageTreatment} />
      <PreviewCard data={blogData.youAreWhatYouEat} />
    </Container>
  );
};

export default CardsContainer;
