"use client";

import React from "react";
import ReviewCard from "../../components/ReviewCard";
import { Col_3, Container, ContainerFluid, Row } from "../../styledComponents/Containers";
import styled from "styled-components";
import { testimonialData } from "../../data/testimonialData";
import { mainCream } from "../../styledComponents/globalStyles";

const Heading = styled.h4`
  color: black;
  text-align: center;
  font-size: 2em;
`;
const StyledContainerFluid = styled.div`
  display: flex;
  flex-direction: column;
  background: ${mainCream};
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 2em 0;
`;
const Column = styled.div`
  flex-basis: 33.33%;
  @media screen and (max-width: 1300px) {
    flex-basis: 50%;
  }
  @media screen and (max-width: 900px) {
    flex-basis: 100%;
    margin: 0 5em;
  }
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
    margin: 0;
  }
`;
const Reviews = () => {
  return (
    <StyledContainerFluid>
      <StyledContainer>
        <Heading>Testimonials</Heading>
        <Row>
          {testimonialData.map((review, key) => (
            <Column key={key}>
              <ReviewCard name={review.name} location={review.subHeading} text={review.text} />
            </Column>
          ))}
        </Row>
      </StyledContainer>
    </StyledContainerFluid>
  );
};

export default Reviews;
