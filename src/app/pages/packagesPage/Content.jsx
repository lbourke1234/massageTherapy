"use client";

import React from "react";
import styled from "styled-components";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import Link from "next/link";
import {
  Button,
  ButtonContainer,
  Container,
  Heading,
  LastMinuteButton,
  LastMinuteContainer,
} from "./SContent";
// import { useNavigate } from "react-router-dom";

const Content = ({ data }) => {
  // const navigate = useNavigate();
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  const handleClick = () => {
    // navigate("/#services");
  };
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
