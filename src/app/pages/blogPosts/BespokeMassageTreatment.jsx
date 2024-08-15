import React from "react";
import Space from "../about/Space";
import ContactInfo from "../contactInfo/ContactInfo";
import Navbar from "../../components/nav/Navbar";
import Link from "next/link";
import BespokeButton from "./BespokeButton";
import Image from "next/image";
import Picture from "/public/resources/webp/massage blog.webp";
import FastNavbar from "@/app/components/nav/FastNavbar";

const BespokeMassageTreatment = () => {
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
          alt="Marta giving a relaxing back massage to a client"
          loading="eager"
        />
        <Link href={"/blog"}>
          <button className="py-[0.7rem] px-[2.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <h1 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            {`Why is bespoke treatment a better option than the regular massage experience?`}
          </h1>
          <p className="cm800:text-[1.2em]">
            {`I believe in a holistic approach to health; I believe that no part of our body functions
            in isolation from the rest. I believe that everyone is unique and what is right for me
            may not necessarily suit you. I apply this principle in every area of my life.`}
          </p>
          <p className="cm800:text-[1.2em]">
            {`Moreover, most of the time, my clients ask for a “mix”, a massage that will be a
            combination of several techniques, they often do not know what type of massage is right
            for them, or they are worried that one type of massage is not the answer to how they
            feel, that they will have to book one relaxation treatment and one sports one to achieve
            what they need. I think the beauty of manual therapy is that with the right knowledge,
            you can build a treatment dedicated to a given person, prepared to address all the
            client's needs.`}
          </p>
          <p className="cm800:text-[1.2em]">
            {`We live in a time when we have access to everything, we can design virtually everything
            according to our needs, so why not design a massage treatment. Why not take advantage of
            the knowledge, the research we have access to, which clearly shows that lumping everyone
            in the same bag and assuming that two completely different people will be happy with the
            same solution no longer makes sense.`}
          </p>
          <p className="cm800:text-[1.2em]">
            {`The treatments I offer are the result of over 12 years of training, work, research. I am
            constantly improving my knowledge, I am currently studying osteopathy and naturopathy at
            British College of Osteopathic Medicine, and I sometimes joke that I will never stop
            learning because new research is being produced all the time, certain concepts are being
            debunked and new methods are being developed.`}
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2">How does it work?</h3>
          <p className="cm800:text-[1.2em]">
            {`Before the treatment, we will discuss what your needs are, what your body will benefit
            from most, which areas need special attention. We will discuss contraindications,
            pressure. We will decide which techniques will be suitable for you.`}
          </p>
          <p className="cm800:text-[1.2em]">
            There is a wide variety of massage techniques, so why restrict yourself to just one?{" "}
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            And why is having a massage actually a good idea?
          </h3>
          <p className="cm800:text-[1.2em]">
            {`Maybe the first question should be that one. Still, a lot of people believe that
            massages are unnecessary; some even refer to them as luxury goods. In my opinion,
            massage treatments are just as essential as a good quality meal or good night's rest,
            and I cannot imagine life without them.`}
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            And what techniques do I use?
          </h3>
          <p className="cm800:text-[1.2em]">
            {`I am a certified therapist in relaxing/holistic, Swedish/classic, deep tissue, soft
            tissue, sports and recovery, manual lymphatic drainage, myofascial release, trigger
            point therapy, pregnancy, joint and visceral manipulation, muscle energy techniques, dry
            needling, and kinesiology taping treatments.`}{" "}
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            {`Let's explore a few of the benefits of a massage treatment (I cannot list them all):`}
          </h3>
          <ul className="list-disc ml-8 pb-4">
            <li className="cm800:text-[1.2em]">Releases muscle pain and stiffness</li>
            <li className="cm800:text-[1.2em]">Improves circulation</li>
            <li className="cm800:text-[1.2em]">Speeds up healing of muscle injuries</li>
            <li className="cm800:text-[1.2em]">Restores the range of motion</li>
            <li className="cm800:text-[1.2em]">Provides deep relaxation</li>
            <li className="cm800:text-[1.2em]">Minimises a risk of sport related injuries</li>
            <li className="cm800:text-[1.2em]">Improves flexibility</li>
            <li className="cm800:text-[1.2em]">Boosts immunity</li>
            <li className="cm800:text-[1.2em]">Improves mood</li>
            <li className="cm800:text-[1.2em]">Reduces stress</li>
            <li className="cm800:text-[1.2em]">Increases the level of positive hormones</li>
            <li className="cm800:text-[1.2em]">Improves sleep</li>
            <li className="cm800:text-[1.2em]">Reduces swelling</li>
            <li className="cm800:text-[1.2em]">Removes toxins.</li>
          </ul>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            Do you still have any doubts that massage is worth trying?
          </h3>
          <p className="cm800:text-[1.2em]">
            Ps. If you do not like a bespoke massage idea, and you would like to book your
            favourite, regular massage treatment I am happy to provide it. As I mentioned before, I
            do understand we all might have different needs, and I am not going to try to convince
            you that my approach is better.
          </p>
          <p className="cm800:text-[1.2em]">Seen you soon!</p>
          <p className="cm800:text-[1.2em]">Marta</p>
          <BespokeButton />
        </div>
      </div>
      <ContactInfo />
    </>
  );
};

export default BespokeMassageTreatment;
