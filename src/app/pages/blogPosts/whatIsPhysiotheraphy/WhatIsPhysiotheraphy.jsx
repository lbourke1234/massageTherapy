import React from "react";
import Navbar from "../../../components/nav/Navbar";
import Space from "../../about/Space";
import styled from "styled-components";
import ContactInfo from "../../contactInfo/ContactInfo";
import { useNavigate } from "react-router-dom";

const SubHeading = styled.h3`
  font-size: 2.5em;
`;
const Text = styled.p`
  font-size: 1.3em;
`;
const ListItem = styled.li`
  font-size: 1.3em;
`;
const Image = styled.img`
  height: 50vh;
  width: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  color: black;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;
const ContentContainer = styled.div`
  padding-top: 1em;
`;
const Button = styled.button`
  padding: 0.7rem 2.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #6c757d;
  border-radius: 25px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;
  margin: 1em 0 0 0;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Increase shadow slightly */
    transform: translateY(-2px); /* Move button slightly up */
  }
`;

const WhatIsPhysiotheraphy = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Space />
      <Container>
        <Image src="https://massagetherapy.london/_next/static/media/marta.8af08566.jpg" />
        <Button onClick={() => navigate("/blog")}>Back</Button>
        <ContentContainer>
          <Text>
            What is physiotherapy? Physiotherapy, sometimes called physical therapy, is a healthcare
            profession that involves the assessment, diagnosis and treatment of people suffering
            from number of ailments, illnesses, injuries and/or disabilities. Its main purpose is to
            promote or restore physical function and mobility in patients and look after their
            wellbeing.
          </Text>
          <Text>
            A physiotherapist will help individuals to improve, regain or maintain mobility and
            physical function that may have been adversely affected by injury, illness or
            disability. They can also help to prevent or manage pain, injury, impaired movement and
            disability through exercise and manual therapy. In addition, physiotherapists provide
            patients with information about their condition and a plan to improve or restore
            mobility going forward.
          </Text>
          <Text>
            Here, at the State of Change Clinic in East London, our friendly and caring
            physiotherapist Sevda graduated from UEL in 2015 and is registered and recognised by the
            Health and Care Professionals Council and Chartered Society of Physiotherapy.
          </Text>
          <Text>
            Sevda treats patients holistically, using her 20 years’ experience to assess physical
            and mental stress, sleep, nutrition and selfcare. She uses a number of techniques and
            exercises to help clients reach their goal of becoming physically and/or emotionally
            pain-free. In some cases, this may involve empowering the client to take control and
            manage their condition so they can improve their own health and wellbeing.
          </Text>
          <SubHeading>What is physiotherapy and who can it help?</SubHeading>
          <Text>
            Physiotherapy improves physical mobility and helps to prevent further injuries or
            deterioration and can be used to help people of any age with a wide range of conditions,
            including:
          </Text>
          <ul>
            <ListItem>
              Musculoskeletal injuries - sports injuries, back, neck or shoulder pain
            </ListItem>
            <ListItem>
              Neurological disorders - mobility problems arising from a stroke, Parkinson's disease
              or multiple sclerosis
            </ListItem>
            <ListItem>
              Cardiopulmonary conditions - rehabilitation following a heart attack or heart surgery,
              cystic fibrosis or COPD
            </ListItem>
            <ListItem>Physical rehabilitation following dislocation and fractures</ListItem>
            <ListItem>Mental stress and sleep disorders</ListItem>
          </ul>
          <SubHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SubHeading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet repellat
            culpa aut optio eaque amet vero ad magnam veniam tenetur reiciendis, obcaecati delectus
            debitis, excepturi fugiat enim hic voluptatem.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet repellat
            culpa aut optio eaque amet vero ad magnam veniam tenetur reiciendis, obcaecati delectus
            debitis, excepturi fugiat enim hic voluptatem.
          </Text>
          <SubHeading>Lorem ipsum dolor sit amet consectetur adipisicing elit.</SubHeading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet repellat
            culpa aut optio eaque amet vero ad magnam veniam tenetur reiciendis, obcaecati delectus
            debitis, excepturi fugiat enim hic voluptatem.
          </Text>
        </ContentContainer>
      </Container>
      <ContactInfo />
    </>
  );
};

export default WhatIsPhysiotheraphy;
