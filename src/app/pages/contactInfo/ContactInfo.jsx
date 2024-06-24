"use client";

import React from "react";
import styled from "styled-components";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { MassageLogo } from "../../styledComponents/components";

const Instagram = styled(GrInstagram)`
  &:hover {
    cursor: pointer;
  }
`;
const LinkedIn = styled(GrLinkedin)`
  margin: 0 1em;
  &:hover {
    cursor: pointer;
  }
`;
const Phone = styled(GrPhone)`
  &:hover {
    cursor: pointer;
  }
`;
const ContactContainer = styled.a`
  color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const MainContainer = styled.div`
  padding: 1em 0 0 0;
  color: black;
  @media screen and (max-width: 800px) {
    display: flex;
    // justify-content: center;
  }
`;
const ListElement = styled.li`
  list-style: none;
  padding: 0 0 1em 0;
`;
const ListHeading = styled.li`
  color: rgb(253, 180, 42);
  list-style: none;
  font-size: 1.4em;
  padding: 0 0 1.5em 0;
`;
const Copyright = styled.p`
  text-align: center;
  padding-bottom: 1em;
  color: black;
`;

const ContactInfo = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <ul>
            <ListHeading>Location</ListHeading>
            <ListElement>Light Centre Marylebone</ListElement>
            <ListElement>Lower Ground</ListElement>
            <ListElement>49 Marylebone High Street</ListElement>
            <ListElement>London</ListElement>
            <ListElement>W1U 5HJ</ListElement>
          </ul>
          <ul>
            <ListHeading>Hours</ListHeading>
            <ListElement>Monday 9am - 8pm</ListElement>
            <ListElement>Tuesday 12pm - 8pm</ListElement>
            <ListElement>Thursday 9am - 4pm</ListElement>
            <ListElement>Friday 9am - 8pm</ListElement>
          </ul>
          <ul>
            <ListHeading>Contact</ListHeading>
            <ListElement>0750 2287 115 </ListElement>
            <ListElement>marta@massagetherapy.london</ListElement>
            <ListElement>
              <div className="flex">
                <Instagram
                  onClick={() =>
                    window.open("https://www.instagram.com/massagetherapy.london/", "_blank")
                  }
                />
                <LinkedIn
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/marta-suchanska-aa3301283", "_blank")
                  }
                />
                <ContactContainer href="tel:07502287115">
                  <Phone />
                </ContactContainer>
              </div>
            </ListElement>
            <ListElement></ListElement>
            <ListElement></ListElement>
          </ul>
        </Container>
      </MainContainer>
      <Copyright>
        Copyright ©2024 <MassageLogo>MɅSSɅGE</MassageLogo>
      </Copyright>
    </>
  );
};

export default ContactInfo;
