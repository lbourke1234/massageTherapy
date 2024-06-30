"use client";

import React from "react";
import { MassageLogo } from "../../styledComponents/components";
import {
  ContactContainer,
  Container,
  Copyright,
  Instagram,
  LinkedIn,
  ListElement,
  ListHeading,
  MainContainer,
  Phone,
} from "./SContactInfo";

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
