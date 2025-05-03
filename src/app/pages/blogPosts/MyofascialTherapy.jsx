import React from "react";
import Space from "../about/Space";
import Image from "next/image";
import Link from "next/link";
import ContactInfo from "../contactInfo/ContactInfo";
import Picture from "/public/resources/blogPosts/myofascial-therapy.jpg";
import FastNavbar from "@/app/components/nav/FastNavbar";

const MyofascialTherapy = () => {
  return (
    <>
      <FastNavbar />
      <Space />
      <div className="w-[95%] cm800:w-[70%] text-black m-auto">
        <Image
          className="h-[50vh] w-full object-cover rounded-3xl"
          src={Picture}
          height={647}
          width={1792}
          sizes="(min-width: 800px) 70vw, 95vw"
          placeholder="blur"
          alt="Myofascial therapy session"
          loading="eager"
        />
        <Link href="/blog">
          <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <h1 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            <strong>What Can Myofascial Therapy Treat?</strong>
          </h1>
          <p className="cm800:text-[1.2em]">
            If you’ve ever experienced lingering muscle tightness or chronic pain that doesn’t quite go away with regular massage or stretching, the root cause might lie deeper—within your fascia. Myofascial release therapy targets these intricate connective tissues to help unlock tension, improve posture, and ease chronic discomfort. It’s especially effective when other treatments haven’t provided lasting relief.
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>What Is Myofascial Therapy?</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            Myofascial release therapy is a specialised technique involving slow, sustained pressure on fascia—the connective tissue that encases muscles and organs. By gently stretching and releasing fascial restrictions, the body is allowed to regain mobility and alignment without triggering inflammation.
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>What It Treats</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            Myofascial therapy is suitable for a wide range of physical concerns, including:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Neck, shoulder, and back pain caused by poor posture or repetitive strain.</li>
            <li className="cm800:text-[1.2em] ml-5">Chronic conditions like fibromyalgia, TMJ dysfunction, and tension headaches.</li>
            <li className="cm800:text-[1.2em] ml-5">Plantar fasciitis and frozen shoulder.</li>
            <li className="cm800:text-[1.2em] ml-5">Scar tissue from surgery or injury.</li>
          </ul>
          <p className="cm800:text-[1.2em]  pb-4">
            <strong>It’s especially useful for pain that seems to move or reoccur despite other treatments.</strong>
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Benefits</strong>
          </h3>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Long-term relief from tight, sore muscles and fascia-related pain.</li>
            <li className="cm800:text-[1.2em] ml-5">Enhanced posture and better structural balance.</li>
            <li className="cm800:text-[1.2em] ml-5">Improved mobility and range of motion.</li>
            <li className="cm800:text-[1.2em] ml-5">Greater body awareness and reduced risk of injury.</li>
            <li className="cm800:text-[1.2em] ml-5">Accelerated recovery for athletes and active individuals.</li>
          </ul>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Who It’s For</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            This therapy is ideal for:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Office workers or anyone with posture-related tension.</li>
            <li className="cm800:text-[1.2em] ml-5">Athletes recovering from overuse or trauma.</li>
            <li className="cm800:text-[1.2em] ml-5">Older adults with mobility restrictions or chronic stiffness.</li>
            <li className="cm800:text-[1.2em] ml-5">Those managing pain conditions that haven’t responded well to other treatments.</li>
          </ul>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>What to Expect During a Session</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            During a myofascial release session, I apply gentle, sustained pressure to specific areas. The movements are slow and intentional, allowing the fascia to gradually release. Sessions typically last 60–90 minutes.
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Post-Treatment Advice</strong>
          </h3>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">You might feel a little sore as your body adjusts—this is normal.</li>
            <li className="cm800:text-[1.2em] ml-5">Drink plenty of water to aid tissue recovery.</li>
            <li className="cm800:text-[1.2em] ml-5">Gentle stretching or movement helps integrate the release.</li>
            <li className="cm800:text-[1.2em] ml-5">Support your results with posture awareness and ergonomic changes if needed.</li>
          </ul>

          <p className="cm800:text-[1.2em] font-semibold pb-4">
            If you’re tired of recurring pain, tension, or postural issues, myofascial therapy could be your answer. It goes beyond the surface to help your body function freely and comfortably again.
          </p>
          <p className="cm800:text-[1.2em] font-semibold pb-4">
            Book your myofascial release session today—and start moving without limits.
          </p>

          <div className="flex justify-left mt-6">
            <Link href="/booking">
              <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
                <strong>Book Now!</strong>
              </button>
            </Link>
          </div>

          <p className="cm800:text-[1.2em] pt-4">
            <strong>Marta Suchanska</strong>
          </p>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>Certified Massage Therapist / Year 4 Student Osteopath</strong>
          </p>
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default MyofascialTherapy;
