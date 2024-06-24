"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col_2, Row } from "../../styledComponents/Containers";
import Toast from "./Toast";
import { mainCream } from "../../styledComponents/globalStyles";
import { sendContactForm } from "@/util/helper";

const FormContainer = styled.form`
  max-width: 80%;
  margin: 0 auto;
  padding: 2em 0;
  @media screen and (max-width: 700px) {
    padding: 0 0 2em 0;
  }
`;

const FormField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 0.9em;
  @media screen and (max-width: 700px) {
    font-size: 0.8em;
  }
`;

const Button = styled.button`
  padding: 0.7rem 1.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: #477e81;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 2em 0 0 0;
  background: white;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
`;
const StyledH3 = styled.h5`
  text-align: center;
  padding: 0 0 1em 0;
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1.5em;
  }
`;
const MainContainer = styled.div`
  background: ${mainCream};
  color: black;
  display: flex;
  flex-wrap: wrap;
`;
const Heading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1em;
    margin: 0;
  }
`;
const SubHeading = styled.p`
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
`;
const LeftCol = styled(Col_2)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
    padding: 2em 0 0 0;
  }
`;
const RightCol = styled(Col_2)`
  @media screen and (max-width: 700px) {
    flex-basis: 100%;
  }
`;
const ContentContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 700px) {
    width: 90%;
    text-align: center;
  }
`;
const ToastContainer = styled.div`
  display: flex: 
  justify-content: center;
  border-radius: 25px;
`;

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const [form, setForm] = useState({ name: "", fromEmail: "", message: "", phoneNumber: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactForm(form);
    } catch (error) {
      setEmailFailed(true);
    }
    setEmailSent(true);
  };
  // fetch("https://api.massagetherapy.london/mail/send", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(form),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //   })
  //   .then((data) => {
  //     console.log("Successfully sent email", data);
  //     setEmailSent(true);
  //   })
  //   .catch((error) => {
  //     setEmailFailed(true);
  //     console.error("Error: ", error);
  //   });
  // };

  return (
    <>
      <MainContainer id="contact">
        <LeftCol>
          <ContentContainer>
            <Heading>Haven’t found an appointment time that suits you?</Heading>
            <SubHeading>Contact me and we will find the right solution for you!</SubHeading>
          </ContentContainer>
        </LeftCol>
        <RightCol>
          <FormContainer onSubmit={(e) => onSubmit(e)}>
            <StyledH3>Get in Touch</StyledH3>
            <Row>
              <FormField
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <FormField
                type="text"
                id="number"
                name="number"
                placeholder="Phone Number"
                onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
              />
            </Row>
            <FormField
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, fromEmail: e.target.value })}
            />

            <FormField
              as="textarea"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <Button type="submit">Submit</Button>
          </FormContainer>
          {emailSent && (
            <ToastContainer>
              <Toast message={"Your message has been sent successfully!"} />
            </ToastContainer>
          )}
          {emailFailed && (
            <ToastContainer>
              <Toast message={"Something went wrong while sending your email!"} />
            </ToastContainer>
          )}
        </RightCol>
      </MainContainer>
    </>
  );
};

export default ContactForm;
