"use client";

import React from "react";
import styled from "styled-components";
import Top from "./Top";
import HowDoesItWork from "./HowDoesItWork";
import Benefits from "./Benefits";
import WhoCanBenefit from "./WhoCanBenefit";
import Link from "next/link";

const Container = styled.div`
  margin: auto;
  color: black;
`;
const Heading = styled.h2`
  text-align: center;
  padding: 0 0 1em 0;
  font-size: 2em;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
const Button = styled(Link)`
  position: absolute;
  top: 150px;
  left: 15px;
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  // margin: 0 0 0 7em;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 992px) {
    top: 65px;
    left: 15px;
    position: static;
  }
`;
const LastMinuteButton = styled.button`
  // position: absolute;
  // top: 150px;
  // left: 15px;
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  // margin: 0 0 0 7em;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 992px) {
    top: 65px;
    left: 15px;
    position: static;
  }
`;
const LastMinuteContainer = styled.div`
  width: 70%;
  margin: auto;
  padding: 1em 0;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 1em;
`;

const Content = ({ data }) => {
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
