"use client";

import React from "react";
import Link from "next/link";
import { Container, Heading, ImageContainer, Line, StyledSquareImage } from "./SCardHeadingTextBtn";

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
