import Image from "next/image";
import React from "react";
import Space from "../about/Space";
import FastNavbar from "@/app/components/nav/FastNavbar";
import Link from "next/link";
import ContactInfo from "../contactInfo/ContactInfo";
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";
import Heading3 from "./components/Heading3";
import Paragraph from "./components/Paragraph";
import Bold from "./components/Bold";
import ListItem from "./components/ListItem";
import UnorderedList from "./components/UnorderedList";
import Picture from "/public/resources/blogPosts/typesOfMassages.jpg";

const MostEffectiveMassage = () => {
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
          alt="Massage therapy illustration"
          loading="eager"
        />
        <Link href="/blog">
          <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <Heading1 className="">What is the Most Effective Type of Massage?</Heading1>
          <Paragraph>
            When it comes to massage therapy, one of the most common questions I hear is:{" "}
            <Bold>&quot;What is the most effective type of massage?&quot;</Bold> The truth is
            there&#39;s no single answer. The most effective massage depends entirely on{" "}
            <span className="italic">you</span>&mdash;your body, your needs, and what you&#39;re
            hoping to achieve.
          </Paragraph>
          <Paragraph>
            I believe in a <Bold>bespoke, holistic approach</Bold> to massage therapy. Rather than
            offering a one-size-fits-all solution, I tailor each session to suit your specific
            concerns&mdash;whether you&#39;re looking for deep physical relief, emotional release,
            or simply time to unwind.
          </Paragraph>
          <Paragraph>Let&rsquo;s have a look at the most popular massage treatments:</Paragraph>
          <UnorderedList>
            <ListItem className="mb-6">
              <Bold>Manual Lymphatic Drainage:</Bold> This gentle technique supports the body&rsquo;s
              lymphatic system, helping to reduce swelling, boost immune function, and detoxify the
              body. Ideal after surgery or during times of sluggishness or inflammation. This
              treatment is becoming increasingly popular, especially among those managing chronic
              health conditions, as it supports the immune system in its natural healing and defence
              processes.
            </ListItem>
            <ListItem className="mb-6">
              <Bold>Myofascial Release:</Bold> Focused on releasing tension in the fascia
              (connective tissue), this therapy helps with chronic pain, restricted movement, and
              postural imbalances. It&rsquo;s often chosen by those dealing with long-standing
              discomfort or physical trauma. It&rsquo;s also a great alternative for those who
              don&rsquo;t enjoy sports or deep tissue massage, as the intensity is gentler while
              still delivering profound, lasting effects.
            </ListItem>
            <ListItem className="mb-6">
              <Bold>Deep Tissue Massage:</Bold> A firmer treatment that targets deep layers of muscle
              and connective tissue. Perfect for athletes, those with physically demanding jobs, or
              anyone experiencing muscle tightness or stiffness. It speeds up muscle injury recovery,
              restores range of motion, and provides deep relaxation&mdash;making it both therapeutic
              and rejuvenating.
            </ListItem>
            <ListItem className="mb-6">
              <Bold>Buccal Massage:</Bold> A unique intraoral facial massage that works on the
              muscles inside the mouth and jaw. It&rsquo;s especially effective for relieving tension
              caused by jaw clenching, teeth grinding, and TMJ (temporomandibular joint)
              dysfunction. By releasing deep muscular tightness in this often-neglected area, it can
              help reduce pain, improve jaw mobility, and ease chronic facial discomfort. Many
              clients also report relief from headaches and sinus tension linked to jaw strain.
            </ListItem>
            <ListItem className="mb-6">
              <Bold>Relaxing Massage:</Bold> Gentle, calming strokes to soothe the nervous system,
              reduce stress, and encourage deep relaxation. Ideal for anyone feeling overwhelmed or
              simply needing to reconnect with their body. In the fast-paced rhythm of London life,
              where stress and overstimulation are part of the daily routine, this treatment offers a
              vital pause. It&rsquo;s a moment to slow down, breathe deeply, and allow both body and
              mind to reset.
            </ListItem>
          </UnorderedList>
          <Paragraph>
            The key to an effective massage lies in understanding your goals&mdash;whether that&rsquo;s
            pain relief, improved mobility, post-operative recovery, or emotional well-being.
          </Paragraph>
          <Heading3>Ready to book your treatment?</Heading3>
          <div className="flex justify-left mt-6">
            <Link href="/booking">
              <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
                <strong>Book now!</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default MostEffectiveMassage;
