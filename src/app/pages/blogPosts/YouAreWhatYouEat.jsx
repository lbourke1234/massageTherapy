"use client";

import React from "react";
import styled from "styled-components";
import Space from "../about/Space";
import ContactInfo from "../contactInfo/ContactInfo";
import Navbar from "../../components/nav/Navbar";
import Link from "next/link";
import {
  Button,
  Container,
  ContentContainer,
  Image,
  ListItem,
  SubHeading,
  Text,
} from "./SYouAreWhatYouEat";

const YouAreWhatYouEat = () => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <>
      <Navbar />
      <Space />
      <Container>
        <Image src="/resources/blog eat.jpg" />
        <Link href={"/blog"}>
          <Button>Back</Button>
        </Link>
        <ContentContainer>
          <SubHeading>
            {`You are what you eat. Does eating habits still matter, and is it worth it to be mindful
            of what you eat?`}
          </SubHeading>
          <Text>
            {`A healthy diet is a huge topic; if you search for diet on Google, you'll come up with an
            overwhelming number of results, many of which are contradictory. In this ocean of
            knowledge, it is quite simple to get lost. The biggest challenge for me personally is
            how rarely it is mentioned that each person should get their personalized diet. Yes,
            there are generally applicable golden rules, but you may not always benefit from what is
            usually thought to be healthy. I do not need to search far for an example; throughout my
            adult life, I have forced myself to eat spinach, which I hate, just to discover that I
            am allergic to it. Does this mean I am telling you not to eat spinach? Definitely not,
            eating spinach has many health benefits, and the fact that it is bad for me, does not
            mean it is also bad for you.`}
          </Text>
          <SubHeading>
            {`Also, it seems like a lot of people mistake calorie counting for eating healthily.`}
          </SubHeading>
          <Text>
            {`They pay more attention to quantity than quality when eating. Instead of planning their
            meals throughout the day or making sure they are getting the right quantity of
            nutrients, they just worry about consuming only a certain number of calories. What
            results does this have? Initial weight loss followed by a yo-yo effect, a decrease in
            energy, and a general fatigue brought on by malnourishment.`}
          </Text>
          <SubHeading>{`With all this information, it is quite easy to feel lost.`}</SubHeading>
          <Text>
            {`Influencers advise us on what to eat; some are against meat, some will convince you to
            eat nothing but fruit, and yet others will tell you that having a smoothie for breakfast
            is the most sensible way to start the day. Is this the case, really?`}
          </Text>
          <SubHeading>
            {`Have you ever caught yourself trying to follow the diet plans of celebrities, only
            discovering why you cannot seem to keep to it after seeing their beautiful bodies?`}
          </SubHeading>
          <Text>
            {`When so many others experience benefits, but you feel much worse, have you ever
            considered whether there might be something wrong with you? The answer is simple: you
            are fine. The diet needs to be tailored for you, and how it should be adapted depends on
            a variety of criteria, including your gender, age, place of where you live, lifestyle
            (including how much physical activity you carry out, the sort of work you do, and your
            exposure to stress), medical history, coexisting conditions etc. Therefore, we cannot
            assume that by copying their diet, we will benefit from it in the same way that they do.`}
          </Text>
          <SubHeading>{`So what should we do?`}</SubHeading>
          <SubHeading>{`Each of us should choose a diet that best suits our needs.`}</SubHeading>
          <Text>
            {`Have you ever wondered how your diet affects your overall health? If the answer is no, I
            need to tell you that your daily functioning is greatly impacted by your diet. However,
            most of the time we think that bad diet would show up as bloating or stomach-aches. If
            we do not have any of these symptoms, we assume our nutrition is fine.`}
          </Text>
          <SubHeading>
            {`Dietary mistakes can also lead to headaches, migraines, painful periods, skin diseases,
            bacterial and viral infections, general weakness, mood swings, and depression and be a
            prelude to serious illnesses.`}
          </SubHeading>
          <Text>
            {`But we would rather reach for the well-known medications than consider the reasons
            behind our poor mental and physical health. These medications, while temporarily
            relieving symptoms, do not address the underlying cause of the issue, so we find
            ourselves reaching for them more frequently and taking larger doses of them. As a
            student I became seriously ill. The doctors were unable to diagnose me. As a result, my
            body, devastated by illness and medication, was no longer able to function. Fortunately,
            I came across a person, who showed me the right way. We began by changing my diet. I
            started to feel better gradually. I could not believe that altering my eating habits
            could change so much. That is when I started my nutrition education, and I would not go
            back to where I used to be for any reason.`}
          </Text>
          <Text>
            {`But to the point, I was going to write about what a properly balanced diet looks like.`}
          </Text>
          <SubHeading>
            {`There are a few golden rules that, if followed, yield huge results:`}
          </SubHeading>
          <ul>
            <ListItem>
              {`Breakfast: As the most important meal of the day, it is something we should never
              skip. Breakfast should be warm and savoury rather than sweet; consuming sugar to begin
              the day will simply cause our energy levels to spike and then drop rapidly. Protein,
              carbs, and good fats are all included in breakfast.`}
            </ListItem>
            <ListItem>
              {`Lunch: is the next and most important meal; it should be well-balanced and give us the
              appropriate quantity of fat, carbs, and protein. After a meal like this, we can
              comfortably go for dessert.`}
            </ListItem>
            <ListItem>
              {`Dinner is the smallest meal of the day and should be eaten no later than 7 p.m. Eating
              too much at night will only cause us to have restless nights, difficulty falling
              asleep, morning stomach-aches, and other issues.`}
            </ListItem>
          </ul>
          <Text>{`And all this is nicely represented by the saying:`}</Text>
          <SubHeading>
            {`Eat breakfast like a king, lunch like a prince, and dinner like a pauper.`}
          </SubHeading>
          <ul>
            <ListItem>
              {`On top of this, adequate fluid intake (tea with theine and coffee do not count).
              Drinking a glass of warm water with lemon before bed and immediately upon waking is a
              very good habit.`}
            </ListItem>
            <ListItem>
              {`Reaching for good quality products. It is not quantity that counts, but quality!`}
            </ListItem>
            <ListItem>{`Cutting down on processed products`}</ListItem>
            <ListItem>
              {`Reducing sugar is probably not something I need to bring up. Usually, this is the
              hardest step to do. I frequently hear people say things like, "I cannot stop eating
              sugar." And I am not asking you to do so. I am asking you to reduce and change your
              attitude towards it. It should not be controlling you. We all have a choice, and we
              all can make a choice to make our nutritional habits better.`}
            </ListItem>
          </ul>
          <Text>
            {`If you would like to change your eating habits, if you feel you could benefit from it to
            improve your wellbeing or support your medical treatment, I would be more than happy to
            invite you to individual consultations in London, and online.`}
          </Text>
          <Text>{`See you soon!`}</Text>
          <Text>{`Marta`}</Text>
          <Button
            onClick={() =>
              window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank")
            }
          >
            {`Book Now!`}
          </Button>
        </ContentContainer>
      </Container>
      <ContactInfo />
    </>
  );
};

export default YouAreWhatYouEat;
