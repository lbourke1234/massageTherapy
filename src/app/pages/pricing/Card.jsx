import React from "react";
import styled from "styled-components";
import { Col_2, Col_3, Col_4 } from "../../styledComponents/Containers";

const StyledContainer = styled(Col_2)`
  padding: 0 1.5em 1.5em 1.5em;
  // color: white;
  // border: 1px solid #477e81;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
  }
`;

const Heading = styled.h2`
  padding-top: 1em;
  font-size: 1.5em;
  font-weight: 500;
`;

const StyledImage = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adjust shadow as needed */
  border-radius: 8px; /* Adjust border radius as needed */
  @media screen and (max-width: 800px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (max-width: 350px) {
    height: 200px;
    width: 200px;
  }
`;
const ImageContainer = styled.div`
  @media screen and (max-width: 1050px) {
    // width: 500px;
    // height: 40vh;
  }
  @media screen and (max-width: 800px) {
    width: auto;
    // height: 40vh;
    display: flex;
    justify-content: center;
  }
`;
const ListItem = styled.p`
  font-size: 1em;
`;

const StyledExtraButton = styled.button`
  padding: 0.7rem 1.75rem;
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
`;
const StyledExtraButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Line = styled.hr`
  width: 27em;
  margin: 10px auto 30px;
  display: none;
  @media screen and (max-width: 1050px) {
    display: block;
  }
  @media screen and (max-width: 800px) {
    width: 15em;
  }
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;

const Card = ({ data }) => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <StyledContainer>
      <div>
        <ImageContainer>
          <StyledImage src={data.src} />
        </ImageContainer>
        <Heading>{data.heading}</Heading>
        {data.bullets.map((bullet, index) => {
          return <ListItem key={index}>{bullet}</ListItem>;
        })}
      </div>
      <StyledExtraButtonContainer>
        <StyledExtraButton onClick={() => goToExternalSite()}>Book Now!</StyledExtraButton>
      </StyledExtraButtonContainer>
      <Line />
    </StyledContainer>
  );
};

export default Card;
