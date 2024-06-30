import React from "react";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import {
  Author,
  Container,
  Date,
  Heading,
  Image,
  InfoContainer,
  StyledSpan,
  StyledUserIcon,
  Text,
} from "./SPreviewCard";

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
