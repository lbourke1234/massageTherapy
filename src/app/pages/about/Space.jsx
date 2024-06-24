"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 12em;
  @media screen and (max-width: 992px) {
    height: 6em;
  }
`;

const Space = () => {
  return <Container></Container>;
};

export default Space;
