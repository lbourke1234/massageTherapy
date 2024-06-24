"use client";

import React from "react";
import styled from "styled-components";
import { ContainerFluid } from "../../styledComponents/Containers";
import { mainCream } from "../../styledComponents/globalStyles";

const Text = styled.p`
  font-size: 1em;
`;
const Heading = styled.h3`
  font-size: 1.5em;
`;
const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 2em 0;
  @media screen and (max-width: 1500px) {
    width: 90%;
  }
`;
const Fluid = styled(ContainerFluid)`
  background: ${mainCream};
  color: black;
`;
const Content = () => {
  return (
    <Fluid>
      <Container>
        {/* <Heading>Bundle</Heading>
        <Text>Packet of 5 (10% off the full price) - to be used within 12 months.</Text> */}
        <Heading>Gift Vouchers</Heading>
        <Text>Gift vouchers available</Text>
        <Heading>Payments</Heading>
        <Text>Payments: Upfront online, card or cash at the clinic.</Text>
        <Heading>Cancellation</Heading>
        <Text>Cancellations: 24hrs cancellation policy with full refund on all treatments.</Text>
        <Text>
          Please note changes or cancellations after that time won't be possible and you will be
          charged the full amount.
        </Text>
      </Container>
    </Fluid>
  );
};

export default Content;
