import React from "react";
import styled from "styled-components";
import { Col_2, Col_3, Col_4 } from "../../styledComponents/Containers";
import {
  Heading,
  ImageContainer,
  Line,
  ListItem,
  StyledContainer,
  StyledExtraButton,
  StyledExtraButtonContainer,
  StyledImage,
} from "./SCard";

const Card = ({ data }) => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <StyledContainer>
      <div>
        <ImageContainer>
          <StyledImage src={data.src} />
        </ImageContainer>
        <Heading>{data.heading}</Heading>
        {data.bullets.map((bullet, index) => {
          return <ListItem key={index}>{bullet}</ListItem>;
        })}
      </div>
      <StyledExtraButtonContainer>
        <StyledExtraButton onClick={() => goToExternalSite()}>Book Now!</StyledExtraButton>
      </StyledExtraButtonContainer>
      <Line />
    </StyledContainer>
  );
};

export default Card;
