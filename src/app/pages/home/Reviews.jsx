"use client";

import React from "react";
import ReviewCard from "../../components/ReviewCard";
import { Col_3, Container, ContainerFluid, Row } from "../../styledComponents/Containers";
import styled from "styled-components";
import { testimonialData } from "../../data/testimonialData";
import { mainCream } from "../../styledComponents/globalStyles";
import { Column, Heading, StyledContainer, StyledContainerFluid } from "./SReviews";

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
