import React from "react";

import { FaStar } from "react-icons/fa6";
import styled from "styled-components";
import { Row } from "../styledComponents/Containers";

const StyledRow = styled(Row)`
  justify-content: center;
  padding: 0 0 1em 0;
`;
const StyledIcon = styled(FaStar)`
  color: rgb(253, 180, 42);
  font-size: 1.5em;
`;

const FiveStarReview = () => {
  return (
    <StyledRow>
      <StyledIcon />
      <StyledIcon />
      <StyledIcon />
      <StyledIcon />
      <StyledIcon />
    </StyledRow>
  );
};

export default FiveStarReview;
