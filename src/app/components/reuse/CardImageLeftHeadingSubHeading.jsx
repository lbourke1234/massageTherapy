import React from "react";
import { Row } from "../../styledComponents/Containers";
import { LeftCol, RightCol, StyledContainer, Text } from "./SCardImageLeftHeadingSubHeading";
import { Heading, StyledSquareImage } from "./SCardHeadingTextBtn";

const CardImageLeftHeadingSubHeading = ({ heading, text, src }) => {
  return (
    <StyledContainer>
      <Row>
        <LeftCol>
          <Heading>{heading}</Heading>
          <Text>{text}</Text>
        </LeftCol>
        <RightCol>
          <StyledSquareImage src={src} alt="nothing yet" />
        </RightCol>
      </Row>
    </StyledContainer>
  );
};

export default CardImageLeftHeadingSubHeading;
