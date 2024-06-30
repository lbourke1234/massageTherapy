"use client";

import React, { useState } from "react";
import { Row } from "../../styledComponents/Containers";
import { sendContactForm } from "@/util/helper";
import Toast from "./Toast";
import {
  Button,
  ContentContainer,
  FormContainer,
  FormField,
  Heading,
  LeftCol,
  MainContainer,
  RightCol,
  StyledH3,
  SubHeading,
  ToastContainer,
} from "./SContactForm";

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
