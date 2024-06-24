import React from "react";
import styled from "styled-components";
import { FaRegUser, FaRegClock } from "react-icons/fa";
import Link from "next/link";

const Container = styled.div`
  flex-basis: 50%;
  color: black;
  padding: 1em;
  @media screen and (max-width: 992px) {
    flex-basis: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const Heading = styled.h2`
  color: black;
  padding: 0.2em 0;
  font-weight: 600;
  font-size: 2em;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.p`
  // font-size: 1.3em;
`;
const Author = styled.span`
  font-size: 1.2em;
  text-decoration: underline;
  margin-left: 0.2em;
`;
const Date = styled.span`
  font-size: 1.2em;
  margin-left: 0.2em;
`;
const InfoContainer = styled.div`
  padding: 1em 0 0 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 331px) {
    flex-direction: column;
    align-items: start;
  }
`;
const StyledSpan = styled.span`
  margin-left: 0.2em;
  @media screen and (max-width: 331px) {
    display: none;
  }
`;
const StyledUserIcon = styled(FaRegUser)`
  @media screen and (max-width: 331px) {
    display: none;
  }
`;

const PreviewCard = ({ data }) => {
  return (
    <Container>
      <Link href={data.link}>
        <Image src={data.image} />
      </Link>
      <InfoContainer>
        <StyledUserIcon />
        <Author>{data.author} </Author>
        <StyledSpan className="flex items-center gap-1">
          {" - "} <FaRegClock />
        </StyledSpan>
        <Date>{data.date}</Date>
      </InfoContainer>
      <Link href={data.link}>
        <Heading>{data.title}</Heading>
      </Link>
      <Text>{data.preview}</Text>
    </Container>
  );
};

export default PreviewCard;
