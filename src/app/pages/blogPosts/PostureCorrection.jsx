import React from "react";
import Heading1 from "./components/Heading1";
import Paragraph from "./components/Paragraph";
import Heading2 from "./components/Heading2";
import OrderedList from "./components/OrderedList";
import ListItem from "./components/ListItem";
import UnorderedList from "./components/UnorderedList";
import Bold from "./components/Bold";
import Picture from "/public/resources/webp/Marta_Osteopath-241.webp";
import Link from "next/link";
import Space from "../about/Space";
import FastNavbar from "@/app/components/nav/FastNavbar";
import ContactInfo from "../contactInfo/ContactInfo";
import BespokeButton from "./BespokeButton";
import Image from "next/image";

const PostureCorrection = () => {
  return (
    <>
      <FastNavbar />
      <Space />
      <div className="w-[95%] cm800:w-[75%] m-auto text-black">
        <Image
          className="h-[50vh] w-full object-cover rounded-3xl"
          src={Picture}
          height={647}
          width={1792}
          sizes="(min-width: 800px) 75vw, 95vw"
          placeholder="blur"
          alt="Healthy person reading while drinking a hot drink, with oats and healthy food"
          loading="eager"
        />
        <Link href={"/blog"}>
          <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <Heading1>
            Posture Matters: Unlocking Its Types, Benefits, and Secrets to Better Alignment.
          </Heading1>
          <Paragraph>{`Have you ever caught yourself slouching at your desk or standing with all your
weight on one leg? If so, you're not alone. Many of us do not pay attention to our
posture until a stiff neck, aching back, or tired muscles remind us of its importance.
In a bustling city like London, where life moves fast and stress can creep into every
corner, maintaining good posture is essential for your overall well-being.`}</Paragraph>
          <Paragraph>{`Let's explore the different types of posture, why they matter, and how you can
achieve and maintain a healthier, more confident stance. By the end of this
article, you will not only understand the nuances of posture but also have practical
advice to keep your body in alignment. So, are you ready to feel great?`}</Paragraph>
          <Heading2>Understanding Posture: The Foundation of Movement</Heading2>
          <Paragraph>
            Posture refers to the way your body holds itself when sitting, standing, or lying down.
            It is the foundation for every movement you make. Good posture keeps your bones and
            joints in proper alignment, minimizes strain on your muscles and ligaments, and promotes
            efficient functioning of your internal organs.
          </Paragraph>
          <Paragraph>
            Poor posture, on the other hand, can lead to muscle tension, joint pain, and even
            chronic conditions. Over time, it can take a toll on your energy levels, making everyday
            tasks feel more demanding.
          </Paragraph>
          <Heading2>Types of Posture: Where Do You Stand?</Heading2>
          <Paragraph>
            Did you know there are several types of posture? In his 2020 book, Christopher Norris
            outlines four common posture types, highlighting their characteristics and effects on
            the body:
          </Paragraph>
          <OrderedList>
            <ListItem>
              <Bold>Kyphotic Posture: </Bold>Characterized by an exaggerated curve of the thoracic
              spine, this posture often results in rounded shoulders and a forward head position. It
              is commonly seen in those who spend long hours at desks or on devices, leading to
              tight chest muscles and a weakened upper back.
            </ListItem>
            <ListItem>
              <Bold>Lordotic Posture: </Bold>Marked by an excessive inward curve of the lumbar
              spine, this posture often causes the pelvis to tilt forward. It is commonly associated
              with weak abdominal muscles and tight hip flexors, leading to lower back discomfort.
            </ListItem>
            <ListItem>
              <Bold>Flat Back Posture: </Bold>This posture occurs when the natural lumbar curve is
              flattened, causing the spine to lose its shock-absorbing properties. It often results
              in a slouched appearance, back stiffness, and difficulty standing upright for long
              periods.
            </ListItem>
            <ListItem>
              <Bold>Forward Head Posture: </Bold>
              {`A prevalent issue in today's digital age, this posture involves the head jutting
forward past the shoulders. It places strain on the neck and upper back, often
referred to as "tech neck" or "text neck".`}
            </ListItem>
          </OrderedList>
          <Paragraph>
            Norris emphasizes the importance of addressing these imbalances to improve both posture
            and overall health.
          </Paragraph>
          <Heading2>How Posture Affects Your Life</Heading2>
          <Paragraph>
            Why should you care about your posture? Aside from avoiding back pain, good posture can
            impact several aspects of your life, including:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <Bold>Confidence</Bold>
            </ListItem>
            <ListItem>
              <Bold>Energy Levels</Bold>
            </ListItem>
            <ListItem>
              <Bold>Physical Health</Bold>
            </ListItem>
            <ListItem>
              <Bold>Mental Well-being.</Bold>
            </ListItem>
          </UnorderedList>
          <Heading2>Tips for Maintaining a Healthy Posture</Heading2>
          <Paragraph>
            So, how can you improve your posture amidst the hustle and bustle of London life? Here
            are some practical tips you can start today:
          </Paragraph>
          <OrderedList>
            <ListItem>
              <Bold>Practice Desk Ergonomics</Bold>
            </ListItem>
            <ListItem>
              <Bold>Take Regular Breaks</Bold>
            </ListItem>
            <ListItem>
              <Bold>Introduce Strengthening and Mobility Exercises</Bold>
            </ListItem>
            <ListItem>
              <Bold>Wear Supportive Shoes</Bold>
            </ListItem>
            <ListItem>
              <Bold>Sleep Smart</Bold>
            </ListItem>
            <ListItem>
              <Bold>Get Professional Help</Bold>
            </ListItem>
          </OrderedList>
          <Heading2>Exercises to Improve Your Posture</Heading2>
          <Paragraph>Ready to put these tips into action? Try these simple exercises:</Paragraph>
          <UnorderedList>
            <ListItem>
              <Bold>Wall Angels: </Bold>Stand with your back flat against a wall and slowly raise
              and lower your arms like you are making a snow angel. This strengthens your upper back
              and shoulders.
            </ListItem>
            <ListItem>
              <Bold>Cat-Cow Stretch: </Bold>On all fours, alternate between arching your back and
              rounding it. This stretch relieves tension in your spine.
            </ListItem>
            <ListItem>
              <Bold>Posture Check Drill: </Bold>
              {`Stand against a wall, ensuring your head, shoulders,
            and hips touch it. Hold this position for 30 seconds to "reset" your alignment.`}
            </ListItem>
          </UnorderedList>
          <Heading2>Final Thoughts: Invest in Your Posture</Heading2>
          <Paragraph>
            Good posture is not just about looking poised—it is about feeling your best and moving
            through life with ease. While it takes awareness and effort to maintain, the benefits
            far outweigh the initial adjustment period.
          </Paragraph>
          <Paragraph>
            Whether you are dealing with chronic pain, tight muscles, or just need a nudge to
            introduce some changes and improve your posture, I am here to support you. So, why not{" "}
            <Bold>book</Bold> a session and take the first step toward a healthier, more confident
            you?
          </Paragraph>
          <Paragraph>See you soon!</Paragraph>
          <BespokeButton />
          <div className="mt-5">
            <Paragraph className={"mb-[-4px]"}>
              <Bold>Marta Suchanska</Bold>
            </Paragraph>
            <Paragraph>
              <Bold>Certified Massage Therapist/Year 4 Student Osteopath</Bold>
            </Paragraph>
          </div>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default PostureCorrection;
