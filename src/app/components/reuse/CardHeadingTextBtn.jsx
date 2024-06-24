"use client";

import React from "react";
import styled from "styled-components";
import { ContainerFluid } from "../../styledComponents/Containers";
import Link from "next/link";
// import { useNavigate } from "react-router-dom";

const Container = styled(ContainerFluid)`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  padding: 0 0 2em 0;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
const Heading = styled.h2`
  font-size: 1.5em;
  padding: 1.5em 0 0 0;
  color: black;
`;
const StyledSquareImage = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 200px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  // padding: 10em;
  @media screen and (max-width: 1050px) {
    // width: 70%;
    // margin: auto;
  }
  @media screen and (max-width: 800px) {
    // width: 90%;
    // height: 300px;
    display: flex;
    justify-content: center;
  }
`;
const Line = styled.hr`
  width: 25em;
  margin: 10px auto 30px;
  display: none;
  @media screen and (max-width: 1050px) {
    display: block;
  }
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;

const CardHeadingTextBtn = ({ heading, src, link, alt }) => {
  return (
    <Container>
      <Link href={link}>
        <ImageContainer>
          <StyledSquareImage src={src} alt={alt} />
        </ImageContainer>
        <div className="card-body text-center">
          <Heading>{heading}</Heading>
        </div>
        <Line />
      </Link>
    </Container>
  );
};

export default CardHeadingTextBtn;
