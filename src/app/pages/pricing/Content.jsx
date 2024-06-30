"use client";

import React from "react";
import { Container, Fluid, Heading, Text } from "./SContent";

const Content = () => {
  return (
    <Fluid>
      <Container>
        <Heading>Gift Vouchers</Heading>
        <Text>Gift vouchers available</Text>
        <Heading>Payments</Heading>
        <Text>{`Payments: Upfront online, card or cash at the clinic.`}</Text>
        <Heading>Cancellation</Heading>
        <Text>{`Cancellations: 24hrs cancellation policy with full refund on all treatments.`}</Text>
        <Text>
          {`Please note changes or cancellations after that time won't be possible and you will be
          charged the full amount.`}
        </Text>
      </Container>
    </Fluid>
  );
};

export default Content;
