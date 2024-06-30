import React from "react";
import FiveStarReview from "./FiveStarReview";
import { StyledContainer, StyledName, StyledTitle, Text } from "./reuse/SReviewCard";

const ReviewCard = ({ name, location, text }) => {
  return (
    <StyledContainer>
      <StyledName>{name}</StyledName>
      <StyledTitle>{location}</StyledTitle>
      <FiveStarReview />
      <Text>{text}</Text>
    </StyledContainer>
  );
};

export default ReviewCard;
