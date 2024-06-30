// "use client";

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
} from "./SBespokeMassageTreatment";

const BespokeMassageTreatment = () => {
  function goToExternalSite() {
    window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank");
  }
  return (
    <>
      <Navbar />
      <Space />
      <Container>
        <Image src="/resources/massage blog.jpg" />
        <Link href={"/blog"}>
          <Button>Back</Button>
        </Link>
        <ContentContainer>
          <SubHeading>
            {`Why is bespoke treatment a better option than the regular massage experience?`}
          </SubHeading>
          <Text>
            {`I believe in a holistic approach to health; I believe that no part of our body functions
            in isolation from the rest. I believe that everyone is unique and what is right for me
            may not necessarily suit you. I apply this principle in every area of my life.`}
          </Text>
          <Text>
            {`Moreover, most of the time, my clients ask for a “mix”, a massage that will be a
            combination of several techniques, they often do not know what type of massage is right
            for them, or they are worried that one type of massage is not the answer to how they
            feel, that they will have to book one relaxation treatment and one sports one to achieve
            what they need. I think the beauty of manual therapy is that with the right knowledge,
            you can build a treatment dedicated to a given person, prepared to address all the
            client's needs.`}
          </Text>
          <Text>
            {`We live in a time when we have access to everything, we can design virtually everything
            according to our needs, so why not design a massage treatment. Why not take advantage of
            the knowledge, the research we have access to, which clearly shows that lumping everyone
            in the same bag and assuming that two completely different people will be happy with the
            same solution no longer makes sense.`}
          </Text>
          <Text>
            {`The treatments I offer are the result of over 12 years of training, work, research. I am
            constantly improving my knowledge, I am currently studying osteopathy and naturopathy at
            British College of Osteopathic Medicine, and I sometimes joke that I will never stop
            learning because new research is being produced all the time, certain concepts are being
            debunked and new methods are being developed.`}
          </Text>
          <SubHeading>How does it work?</SubHeading>
          <Text>
            {`Before the treatment, we will discuss what your needs are, what your body will benefit
            from most, which areas need special attention. We will discuss contraindications,
            pressure. We will decide which techniques will be suitable for you.`}
          </Text>
          <Text>
            There is a wide variety of massage techniques, so why restrict yourself to just one?{" "}
          </Text>
          <SubHeading>And why is having a massage actually a good idea?</SubHeading>
          <Text>
            {`Maybe the first question should be that one. Still, a lot of people believe that
            massages are unnecessary; some even refer to them as luxury goods. In my opinion,
            massage treatments are just as essential as a good quality meal or good night's rest,
            and I cannot imagine life without them.`}
          </Text>
          <SubHeading>And what techniques do I use?</SubHeading>
          <Text>
            {`I am a certified therapist in relaxing/holistic, Swedish/classic, deep tissue, soft
            tissue, sports and recovery, manual lymphatic drainage, myofascial release, trigger
            point therapy, pregnancy, joint and visceral manipulation, muscle energy techniques, dry
            needling, and kinesiology taping treatments.`}{" "}
          </Text>
          <SubHeading>
            {`Let's explore a few of the benefits of a massage treatment (I cannot list them all):`}
          </SubHeading>
          <ul>
            <ListItem>Releases muscle pain and stiffness</ListItem>
            <ListItem>Improves circulation</ListItem>
            <ListItem>Speeds up healing of muscle injuries</ListItem>
            <ListItem>Restores the range of motion</ListItem>
            <ListItem>Provides deep relaxation</ListItem>
            <ListItem>Minimises a risk of sport related injuries</ListItem>
            <ListItem>Improves flexibility</ListItem>
            <ListItem>Boosts immunity</ListItem>
            <ListItem>Improves mood</ListItem>
            <ListItem>Reduces stress</ListItem>
            <ListItem>Increases the level of positive hormones</ListItem>
            <ListItem>Improves sleep</ListItem>
            <ListItem>Reduces swelling</ListItem>
            <ListItem>Removes toxins.</ListItem>
          </ul>
          <SubHeading>Do you still have any doubts that massage is worth trying?</SubHeading>
          <Text>
            Ps. If you do not like a bespoke massage idea, and you would like to book your
            favourite, regular massage treatment I am happy to provide it. As I mentioned before, I
            do understand we all might have different needs, and I am not going to try to convince
            you that my approach is better.
          </Text>
          <Text>Seen you soon!</Text>
          <Text>Marta</Text>
          {/* <Button
            onClick={() =>
              window.open("https://marta-suchanska.uk2.cliniko.com/bookings", "_blank")
            }
          >
            Book Now!
          </Button> */}
        </ContentContainer>
      </Container>
      <ContactInfo />
    </>
  );
};

export default BespokeMassageTreatment;
