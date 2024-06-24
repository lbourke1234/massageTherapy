"use client";

import React from "react";
import styled from "styled-components";
import { MassageLogo } from "../../styledComponents/components";

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  text-align: justify;
  flex-basis: 60%;
  @media screen and (max-width: 1050px) {
    flex-basis: 100%;
    padding: 1em 0 0 0;
    height: auto;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
`;

const Line = styled.hr`
  width: 25em;
  margin: 10px auto 30px;
  @media screen and (max-width: 500px) {
    width: 10em;
  }
`;
const Heading = styled.h4`
  text-align: center;
  padding: 0 0 0 0;
`;

const TextColumn = () => {
  return (
    <TextCol>
      <Text>Hello, I am Marta</Text>
      <Text>
        {`I'm a founder of `}
        <MassageLogo>MɅSSɅGE</MassageLogo>
        {`, a Certified Massage Therapist,
        Nutritional Advisor and Osteopathic and Naturopathic Medicine Student.`}
      </Text>
      <Text>
        {`My interest in a healthy lifestyle started many years ago when I was chronically ill, and no
        one could diagnose my condition. It took months of looking for help, trying countless
        treatments, doing research, and experimenting, and finally the source of the problem was
        found and my slow and challenging comeback to health has started. I learnt a lot through my
        own experience, and I have decided to share it with people. I gave up my career as a legal
        and business translator and interpreter to start what I have been always fascinated about -
        complementary therapy. My very first training took place in 2013, I trained in massage and
        manual therapy both abroad and in the UK, at the same time I was mastering my knowledge of
        nutrition both in Eastern and Western ways, combining it with breathing, relaxing and
        movement therapy trainings. I constantly improve my knowledge and strive to get the best
        results possible. I am currently undertaking a degree at British College of Osteopathic
        Medicine and receiving an osteopathic training at Harley Street clinic.`}
      </Text>
      <Text>
        {`I cannot promise to find a solution for every single issue, but I am going to do my best to
        guide you towards better health. I am interested in chronic pain management and women's
        health. I believe a holistic and multidisciplinary approach is a key to successful
        treatment, as in my understanding every condition might be a consequence of different
        variables. I created a personalized way of working with my clients, and I strive to find a
        root to the problems rather than working on symptoms alone.`}
      </Text>
      <Text>
        {`I was running my private studio and working at various yoga and wellbeing retreats for
        several years before moving to the UK. I have been working with patients of all age groups.
        In London I have had an opportunity to work with luxury 5-star hotels and spas, renowned
        teams of physiotherapists in Notting Hill and in Kensington, taking care of sport
        professionals (Premier League footballers), patients in pain, those who simply would like to
        improve their wellbeing.`}
      </Text>
    </TextCol>
  );
};

export default TextColumn;
