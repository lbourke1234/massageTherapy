"use client";

import React from "react";
import {
  Author,
  BackgroundColor,
  Button,
  Container,
  ContentContainer,
  Text,
} from "./SBannerWithText";

const BannerWithText = () => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <Container>
      <BackgroundColor>
        <ContentContainer>
          <Text>“The body has an unlimited capacity for repair and regeneration”.</Text>
          <Author>Andrew Taylor Still</Author>
          <Button onClick={() => goToExternalSite()}>Book Now!</Button>
        </ContentContainer>
      </BackgroundColor>
    </Container>
  );
};

export default BannerWithText;
