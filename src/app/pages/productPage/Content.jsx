"use client";

import React from "react";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import {
  Button,
  ButtonContainer,
  Container,
  Heading,
  LastMinuteButton,
  LastMinuteContainer,
} from "./SContent";
// import dynamic from "next/dynamic";

// const { Button, ButtonContainer, Container, Heading, LastMinuteButton, LastMinuteContainer } =
//   dynamic(() => import("./SContent"), { ssr: false });

const Content = ({ data }) => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <Container key={data.key}>
      <ButtonContainer>
        <Button href={"/#services"}>Back</Button>
      </ButtonContainer>
      <Heading>{data.name}</Heading>
      <Top data={data} />
      <HowDoesItWork data={data} />
      <Benefits data={data} />
      <WhoCanBenefit data={data} />
      <LastMinuteContainer key={data.key}>
        <LastMinuteButton onClick={() => goToExternalSite()}>Book Now!</LastMinuteButton>
      </LastMinuteContainer>
    </Container>
  );
};

export default Content;
