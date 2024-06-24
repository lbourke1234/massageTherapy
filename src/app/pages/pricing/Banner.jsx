"use client";

import React from "react";
import styled from "styled-components";
import { ContainerFluid } from "../../styledComponents/Containers";

const StyledContainer = styled(ContainerFluid)`
  height: 70vh;
  // background: #477e81;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("resources/Marta_Osteopath-403.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = () => {
  return <StyledContainer />;
};

export default Banner;
