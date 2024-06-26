"use client";

import React from "react";
import styled from "styled-components";

const StyledExtraButton = styled.button`
  padding: 0.7rem 1.75rem;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 2em 0 0 0;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
  @media screen and (max-width: 800px) {
    padding-bottom: 1em;
  }
`;

const ExternalClientButton = () => {
  return (
    <div>
      <StyledExtraButton onClick={() => goToExternalSite()}>Book Now!</StyledExtraButton>
    </div>
  );
};

export default ExternalClientButton;
