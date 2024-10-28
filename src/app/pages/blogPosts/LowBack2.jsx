import FastNavbar from "@/app/components/nav/FastNavbar";
import React from "react";
import Space from "../about/Space";
import Image from "next/image";
import Link from "next/link";
import Heading1 from "./components/Heading1";
import BespokeButton from "./BespokeButton";
import Paragraph from "./components/Paragraph";
import Bold from "./components/Bold";
import Reference from "./components/Reference";
import ContactInfo from "../contactInfo/ContactInfo";
import Picture from "/public/resources/blogPosts/back-2.webp";
import UnorderedList from "./components/UnorderedList";
import ListItem from "./components/ListItem";
import OrderedList from "./components/OrderedList";

const LowBack2 = () => {
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
            How can lifestyle choices contribute to low back pain and a few essential tips on how to
            tackle them.
          </Heading1>
          <Paragraph>Here are some of the ways lifestyle choices can affect your back:</Paragraph>
          <UnorderedList>
            <ListItem className="mb-2">
              <Bold>Poor Posture:</Bold> Before I start to talk about poor posture, just relax, I do
              not know anyone with a perfect posture. We live in challenging times when keeping your
              posture right all the time is impossible, but you can introduce some changes that will
              improve your wellbeing. But what do we mean by saying “poor posture”? It is most of
              the time sitting or standing in uncomfortable positions that put unnecessary strain on
              the spine. Over time, this can lead to muscle weakness, or hypertonicity (when your
              muscle becomes stiff), spasms, and low back pain. Whether you are at a desk all day or
              slouched on the sofa, correcting your posture can make a big difference.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Sedentary Lifestyle:</Bold> A lack of physical activity can weaken the muscles
              that support the spine, leading to low back pain. Sitting for long periods, especially
              with poor posture, puts pressure on your lower back. It is important to get up,
              stretch, and move regularly. I often hear I have zero time to move. The good news is
              you can stretch even at your working desk or while watching a film. Just build a habit
              of 5-minute breaks, and I can guarantee you it will change your back flexibility. If
              you are ready for a bigger challenge, pick a time of the day when you are less busy
              and spend a few minutes on a mat stretching actively, doing some weight bearing
              exercise and you will feel much better! What would I recommend? Upper spine rotation
              movements, and your QL muscle stretch. Give it a go!
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Obesity:</Bold> Carrying excess weight places extra stress on the spine and
              muscles. Maintaining a healthy weight through a balanced diet and regular exercise can
              help alleviate some of this strain. I know, it is easier said than done, especially
              now when literally everything contains sugar. You can start by reading product labels
              and try to eliminate those who are the unhealthiest ones, or every time you feel an
              urge to eat something sweet go for a walk, just move your body, so your brain can
              build a new habit. I am a nutritional advisor, if you need any support in this topic,
              send me a message! You can also read more about healthy nutritional habits{" "}
              <Link
                className="text-blue-500 underline"
                target="_blank"
                href={"/blog/you-are-what-you-eat"}
              >
                here
              </Link>{" "}
              or book a consultation with me.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Improper or excessive work out:</Bold> We live in an era of beautiful bodies,
              when everyone wants to look like that guy or that woman from the TV. Unfortunately,
              most of us are inpatient and instead of building our strength and resistance
              gradually, we want to go to the gym and feel the effects the next day. Remember you
              will get stronger eventually; by introducing small steps you build your strength
              without injuring yourself.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Stress:</Bold> our biggest enemy. Unfortunately, stress may be a cause of low
              back pain. There is research suggesting that lower work satisfaction may lead to disc
              herniation…Stress decreases cortisol levels in our bloodstream, making our muscles
              stiffer, disturbs our sleep making tissue regeneration disrupted. When we stress out,
              we do not eat properly and forget to drink enough water making the healing process
              slower.
            </ListItem>
          </UnorderedList>
          <Paragraph>{`Let's make a summary and focus on how to keep your back healthy:`}</Paragraph>
          <OrderedList>
            <ListItem className="mb-2">
              <Bold>Maintain Good Posture:</Bold> Whether sitting or standing, keep your spine
              aligned and avoid slouching. Proper posture reduces unnecessary strain on your back
              muscles.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Stay Active:</Bold> Regular exercise strengthens your core and back muscles,
              which support the spine. Activities like yoga, swimming, and walking are great for
              flexibility and stability.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Lift Correctly:</Bold> When lifting heavy objects, bend at your knees, not your
              waist, and use your legs to do the work. This prevents unnecessary strain on your
              lower back.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Take Breaks:</Bold> If you spend long hours sitting, take breaks to stretch and
              move around. This helps relieve tension and improves circulation in your back.
            </ListItem>
            <ListItem className="mb-2">
              <Bold>Massage Therapy:</Bold>{" "}
              {`Regular massages can ease muscle tension, improve flexibility, and
              promote spinal health. It's a relaxing way to prevent and manage back pain.`}
            </ListItem>
          </OrderedList>
          <Paragraph>
            Incorporate these habits into your routine, and your back will thank you!
          </Paragraph>
          <Paragraph>
            Still have questions? Write me a message at:{" "}
            <a href="mailto:marta@massagetherapy.london">marta@massagtherapy.london</a>.
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
            <Reference link={"https://pubmed.ncbi.nlm.nih.gov/15628775/"}>
              Adams, M.A. (2006b). The biomechanics of back pain. Edinburgh ; New York: Churchill
              Livingstone Elsevier.
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Goodman-Differential-Diagnosis-Physical-Therapists/dp/0323722040"
              }
            >
              {`Heick, J. and Lazaro, R.T. (2022). Goodman and Snyder's Differential Diagnosis for
              Physical Therapists - E-Book. Elsevier Health Sciences.`}
            </Reference>
            <Reference
              link={"https://www.amazon.co.uk/Back-Stability-Christopher-M-Norris/dp/0736070176"}
            >
              Norris, C.M. (2008). Back stability : integrating science and therapy. Champaign, Il:
              Human Kinetics.
            </Reference>
            <Reference
              link={
                "https://www.amazon.co.uk/Back-Exercise-Stabilize-Mobilize-Reduce/dp/1492594768"
              }
            >
              Richey, B. (2021). Back exercise : stabilize, mobilize, and reduce pain. Champaign,
              Il: Human Kinetics.
            </Reference>
          </div>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default LowBack2;
