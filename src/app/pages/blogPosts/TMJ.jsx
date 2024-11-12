import FastNavbar from "@/app/components/nav/FastNavbar";
import React from "react";
import Space from "../about/Space";
import Image from "next/image";
import Link from "next/link";
import Heading1 from "./components/Heading1";
import Paragraph from "./components/Paragraph";
import BespokeButton from "./BespokeButton";
import Bold from "./components/Bold";
import Reference from "./components/Reference";
import ContactInfo from "../contactInfo/ContactInfo";
import Heading2 from "./components/Heading2";
import UnorderedList from "./components/UnorderedList";
import ListItem from "./components/ListItem";
import OrderedList from "./components/OrderedList";
import Picture from "/public/resources/blogPosts/tmj.webp";

const TMJ = () => {
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
          <Heading1>{`Struggling with Jaw Pain? Here's How Massage Therapy and Home Care Can
          Relieve Your TMJ Symptoms`}</Heading1>
          <Paragraph>
            Do you ever experience jaw pain when you open and close your mouth? Or maybe you have
            felt discomfort while chewing or speaking? These issues can often point to problems with
            the temporomandibular joint, or TMJ. I this article I will take you through what the TMJ
            is, how it can affect your day-to-day activities, and some helpful ways to manage
            discomfort. If you are based in London and considering massage therapy as part of your
            treatment plan, keep reading to see how a professional massage therapist can help you.
          </Paragraph>
          <Heading2>What is the TMJ, and Why Is It Important?</Heading2>
          <Paragraph>{`Let's start with the basics: the temporomandibular joint, or TMJ, is the hinge joint that
connects your lower jaw (mandible) to your skull, located just in front of each ear.
This joint allows your jaw to move up and down, side to side, and forward and back,
which means it is essential for actions like chewing, speaking, and facial
expressions. Since the TMJ is so frequently in use, it is no surprise that issues with
this joint can lead to pain and dysfunction in your daily life.`}</Paragraph>
          <Heading2>How TMJ Disorders Can Disrupt Daily Life</Heading2>
          <Paragraph>
            So, what exactly happens when this joint does not function as it should? TMJ disorders,
            also known as TMD (temporomandibular joint disorder), can present a range of symptoms
            that vary in severity. Some of the most common signs include:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <Bold>Jaw pain or tenderness</Bold>
            </ListItem>
            <ListItem>
              <Bold>Difficulty chewing</Bold>
            </ListItem>
            <ListItem>
              <Bold>Clicking or popping sounds with pain.</Bold>
            </ListItem>
            <ListItem>
              <Bold>Headaches and earaches</Bold>
            </ListItem>
            <ListItem>
              <Bold>Limited range of motion.</Bold>
            </ListItem>
          </UnorderedList>
          <Paragraph>
            Each of these symptoms can interfere with daily life, making it difficult to enjoy
            social meals, speak comfortably, and manage your routine without pain. So, what are your
            options if you are experiencing these issues.
          </Paragraph>
          <Heading2>How Can Massage Therapy Help Alleviate TMJ Pain?</Heading2>
          <Paragraph>
            Many people with TMJ issues benefit significantly from massage therapy, a non- invasive
            and effective way to relieve pain and tension in the surrounding muscles. Massage
            therapy can help in the following ways:
          </Paragraph>
          <UnorderedList>
            <ListItem>
              <Bold>Releasing Muscle Tension</Bold>
            </ListItem>
            <ListItem>
              <Bold>Improving Blood Flow</Bold>
            </ListItem>
            <ListItem>
              <Bold>Reducing Stress.</Bold>
            </ListItem>
          </UnorderedList>

          <Paragraph>
            <Bold>Buccal massage is designed to beat your TMJ problems. </Bold>Many people have not
            heard about it, those who did, may have some doubts about it as this treatment targets
            muscles inside the mouth, and a feeling of a stranger putting fingers to your mouth may
            put you off, however this is a very powerful tool to help you to manage your condition.
            And remember I would not spend 60 minutes working inside your month, this treatment
            focuses on your face, neck and shoulders to bring you the best relief possible.
          </Paragraph>
          <Paragraph>
            <Bold>
              If you are looking to manage your symptoms at home, there are several self- care
              practices that can help reduce pain and improve mobility.{" "}
            </Bold>{" "}
            Here are some effective, strategies:
          </Paragraph>
          <OrderedList>
            <ListItem>
              <Bold>Dietary Adjustments</Bold>
            </ListItem>
            <Paragraph>
              Eating softer foods and avoiding hard or chewy foods can help reduce strain on the
              TMJ. Choose foods like soups, smoothies, and well-cooked vegetables that are easier to
              chew without excessive effort.
            </Paragraph>
            <ListItem>
              <Bold>Stress Management Techniques</Bold>
            </ListItem>
            <Paragraph>
              Stress is a common cause of muscle tension, which can contribute to TMJ issues.
              Consider incorporating stress-relief practices like deep breathing exercises,
              meditation, or yoga to help you unwind and reduce jaw clenching.
            </Paragraph>
            <ListItem>
              <Bold>Avoid Overuse of the Jaw</Bold>
            </ListItem>
            <Paragraph>
              Avoid habits like chewing gum or biting your nails, which can put unnecessary stress
              on the TMJ. Be mindful of how often you are using your jaw and try to give it breaks
              when possible.
            </Paragraph>
            <ListItem>
              <Bold>Jaw and neck exercises</Bold>
            </ListItem>
            <Paragraph>
              Gentle jaw exercises can increase your range of motion and strengthen the muscles
              supporting the TMJ. Here are some examples:
            </Paragraph>
            <UnorderedList>
              <ListItem>Mouth opening (assisted).</ListItem>
              <Paragraph>
                Open your mouth as wide as possible, using your fingers to assist. Hold this
                position and relax. Be careful not to overextend the jaw, especially if it is
                painful.
              </Paragraph>
              <ListItem>Jaw TMJ Deviation (Assisted)</ListItem>
              <Paragraph>
                Open your mouth slightly and deviate the lower part of your jaw to one side, and
                hold. Use the fingers to assist. You can also deviate to the other side, if
                required.
              </Paragraph>
              <ListItem>Jaw TMJ Deviation (Resisted)</ListItem>
              <Paragraph>
                Let your jaw relax by allowing your bottom lip to open, then deviate your jaw to one
                side as far as comfortable against resistance of two fingers. Repeat to the other
                side if required. This is a strengthening exercise for the jaw muscles.
              </Paragraph>
              <ListItem>Jaw TMJ Depression (Resisted)</ListItem>
              <Paragraph>
                Draw your jaw downwards, against resistance. Your jawbone will not move very much,
                if at all. Hold and relax. This is a strengthening exercise for the jaw muscles.
              </Paragraph>
              <ListItem>Jaw TMJ Elevation (Resisted)</ListItem>
              <Paragraph>
                Open your mouth slightly, then with two fingers and a thumb resist closing of your
                jaw. Your jaw will not close fully during the exercise. This is a strengthening
                exercise for the jaw muscles.
              </Paragraph>
              <ListItem>Jaw TMJ Protrusion (Resisted)</ListItem>
              <Paragraph>
                Push the bottom of your jaw forwards against resistance from your hand. This is a
                strengthening exercise for the jaw muscles, including the digastric muscle.
              </Paragraph>
              <ListItem>Digastric Stretch</ListItem>
              <Paragraph>
                Jutting your chin forward and tilting your head slightly upwards, place the tips of
                both thumbs under your chin. Next, place the tip of your tongue against the roof of
                your mouth, gradually increasing the pressure of your tongue while holding your
                thumbs firmly against the chin. This exercise stretches the digastric muscle,
                involved in eating.
              </Paragraph>
              <ListItem>Neck active stretch</ListItem>
              <Paragraph>
                Actively stretch the neck into forward bending (hands clasped behind back of head
                (skull) and by humping the upper back.
              </Paragraph>
            </UnorderedList>
          </OrderedList>
          <Paragraph>
            I hope you will find these exercises helpful! In case of any questions, drop me a
            message:{" "}
            <a className="text-blue-600" href="mailto:marta@massagetherapy.london">
              marta@massagetherapy.london
            </a>
          </Paragraph>

          <BespokeButton />
          <div className="mt-5">
            <Paragraph className={"mb-[-4px]"}>
              <Bold>Marta Suchanska</Bold>
            </Paragraph>
            <Paragraph>
              <Bold>Certified Massage Therapist/Year 4 Student Osteopath</Bold>
            </Paragraph>
            <Paragraph className={"mb-[2px]"}>References: </Paragraph>
            <Reference
              link={
                "https://www.amazon.co.uk/Goodman-Differential-Diagnosis-Physical-Therapists/dp/0323722040"
              }
            >
              {`Heick, J. and Lazaro, R.T. (2022). Goodman and Snyder's Differential Diagnosis for
              Physical Therapists - E-Book. Elsevier Health Sciences.`}
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Clinical-Mastery-Treatment-Myofascial-Pain/dp/0683306200"
              }
            >
              Lucy Whyte Ferguson and Gerwin, R. (2005a). Clinical mastery in the treatment of
              myofascial pain. Philadelphia: Lippincott Williams & Wilkins.
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Management-Temporomandibular-Disorders-Occlusion-8e/dp/0323582109"
              }
            >
              Okeson, J.P. (2019). Management of Temporomandibular Disorders and Occlusion. 8th
              Edition. Elsevier.
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Clinical-Anatomy-Regions-LAWRENCE-WINESKI/dp/1496345649"
              }
            >
              Snell, R.S. (2012a). Clinical anatomy by regions. Baltimore, Md: Lippincott Williams
              &amp; Wilkins
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Travell-Simons-Myofascial-Pain-Dysfunction/dp/0683083635"
              }
            >
              Travell, J.G. (1999a). Myofascial pain and dysfunction / 1, Upper half of Body.
              Baltimore: Williams & Wilkins.
            </Reference>
            {/* <Reference
              link={
                "https://www.google.com/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://www.rehabmypatient.com/&amp;ved=2ahUKEwiTx4Hqws-JAxWvQEEAHeTqK-AQFnoECBwQAQ&amp;usg=AOvVaw3UUJq6-ThVEyUh4VDp1BL_"
              }
            >
              Rehab My Patient app
            </Reference> */}
            <Reference link={""}></Reference>
          </div>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default TMJ;
