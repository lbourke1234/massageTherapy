import React from "react";
import Space from "../about/Space";
import Image from "next/image";
import Link from "next/link";
import ContactInfo from "../contactInfo/ContactInfo";
import Picture from "/public/resources/blogPosts/MDL-post-surgery.jpg";
import FastNavbar from "@/app/components/nav/FastNavbar";

const ManualLymphaticDrainage = () => {
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
          alt="Manual lymphatic drainage therapy being performed"
          loading="eager"
        />
        <Link href="/blog">
          <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl mt-4 transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
            Back
          </button>
        </Link>
        <div className="pt-4">
          <h1 className="text-2xl cm800:text-[2rem] font-semibold pb-2">
            <strong>Manual Lymphatic Drainage for Post Surgery: A Gentle Path to Faster Healing</strong>
          </h1>

          <p className="cm800:text-[1.2em]">
            Surgery is a powerful intervention. Whether it's cosmetic, reconstructive, or medically necessary, the body goes through significant trauma during the process. One of the most common and uncomfortable side effects of surgery is swelling — a natural part of healing, but one that can delay recovery, cause discomfort, and lead to complications like fibrosis or seromas.
          </p>
          <p className="cm800:text-[1.2em] pt-2">
            This is where <strong>Manual Lymphatic Drainage (MLD)</strong> can be a game changer. In recent years, it’s become a go-to recommendation by surgeons and therapists alike — and for good reason.
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Why Swelling Happens After Surgery</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            When we undergo surgery, our tissues are physically disrupted. Even the most precise procedure causes small blood vessels and lymphatic vessels to be cut or damaged. This interrupts the flow of lymph — a clear fluid that carries immune cells and waste products — leading to a buildup of fluid, toxins, and inflammatory substances around the surgical area.
          </p>
          <p className="cm800:text-[1.2em] pt-2">
            This is why swelling, stiffness, bruising, and discomfort are so common post-op. Left untreated, this buildup can slow recovery, impact cosmetic results, and in some cases, lead to long-term issues like fibrosis (thickened, ropey tissue) or seromas (fluid pockets).
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>What Is Manual Lymphatic Drainage?</strong>
                  </h3>
                  <p className="cm800:text-[1.2em]">
                      <strong>Manual Lymphatic Drainage (MLD)</strong> is a very gentle, rhythmic technique that works with the body’s natural lymphatic system. 
                      <strong>The aim of MLD</strong> is to stimulate lymph flow by guiding fluid towards the nearest working lymph nodes. This helps the body drain excess fluid, reduce inflammation, and detoxify tissues, all while boosting the immune response.
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Benefits of Lymphatic Drainage After Surgery</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            Those who receive lymphatic drainage after surgery often report feeling lighter, less swollen, and more mobile — sometimes after just one session. Here’s why it’s so effective:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Reduces swelling and fluid retention</li>
            <li className="cm800:text-[1.2em] ml-5">Minimises bruising and scar tissue buildup</li>
            <li className="cm800:text-[1.2em] ml-5">Helps prevent fibrosis and seroma formation</li>
            <li className="cm800:text-[1.2em] ml-5">Speeds up wound healing and skin regeneration</li>
            <li className="cm800:text-[1.2em] ml-5">Improves overall comfort and range of motion</li>
          </ul>
          <p className="cm800:text-[1.2em]">
          It’s not just about looking better — though that’s a benefit too. MLD helps you feel more like yourself again during a time when your body is working hard to heal.
          </p>
          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Who Can Benefit?</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            Manual lymphatic drainage is widely used for recovery from:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Cosmetic surgery (liposuction, BBL, tummy tuck, facelift, breast surgery)</li>
            <li className="cm800:text-[1.2em] ml-5">Orthopaedic procedures (knee/hip replacements, shoulder surgeries)</li>
            <li className="cm800:text-[1.2em] ml-5">Abdominal surgery (C-sections, hernia repair, hysterectomy)</li>
            <li className="cm800:text-[1.2em] ml-5">Any post-op recovery with swelling or reduced lymph flow</li>
          </ul>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>If you’re experiencing lingering swelling, discomfort, or want to optimise your healing process, MLD is worth considering.</strong>
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>When to Avoid MLD</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            While MLD is safe and gentle, there are a few situations where it should be avoided or postponed:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">During active infection or fever</li>
            <li className="cm800:text-[1.2em] ml-5">Without your doctor’s clearance in early post-op stages</li>
          </ul>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>Always consult your surgeon or GP before starting MLD after surgery — particularly in the first few weeks.</strong>
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>What to Expect During a Session</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            Your first session will likely begin with a brief consultation to discuss your surgery, recovery timeline, and any symptoms. Then, you’ll lie comfortably on a treatment table.
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">No oils or deep pressure are used</li>
            <li className="cm800:text-[1.2em] ml-5">60–90 minutes depending on the area treated</li>
            <li className="cm800:text-[1.2em] ml-5">Visible results often appear within 24–48 hours</li>
          </ul>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>It’s a gentle, calming experience that works deeply, without causing additional stress to your body.</strong>
          </p>

          <h3 className="text-2xl cm800:text-[2rem] font-semibold pb-2 pt-4">
            <strong>Aftercare Tips</strong>
          </h3>
          <p className="cm800:text-[1.2em]">
            To make the most of your session:
          </p>
          <ul className="list-disc cm800:ml-10 pb-4">
            <li className="cm800:text-[1.2em] ml-5">Stay well hydrated — this helps your lymphatic system work effectively</li>
            <li className="cm800:text-[1.2em] ml-5">Avoid alcohol, heat treatments, or intense exercise for 24 hours</li>
            <li className="cm800:text-[1.2em] ml-5">Listen to your body — rest is still important during recovery</li>
          </ul>
          <p className="cm800:text-[1.2em] pb-4">
            Following these steps can extend the benefits of your session and support your healing process.
          </p>

          <p className="cm800:text-[1.2em] pb-4">
            <strong>Manual Lymphatic Drainage is more than a trend — it’s a clinically supported therapy</strong> that can make a real difference in your surgical recovery. Whether you’re a few days post-op or dealing with long-term swelling, a well-timed series of MLD sessions can help you feel lighter, reduce complications, and move through recovery with more ease.
          </p>
          <p className="cm800:text-[1.2em] pb-4">
          If you’re looking for <strong>professional lymphatic drainage in London</strong>, I offer personalised sessions in a safe, supportive setting in Marylebone.
          </p>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>Ready to feel more comfortable in your healing body?</strong>
          </p>
          <p className="cm800:text-[1.2em] pb-4">
            <strong>Book your post-surgery MLD session today.</strong>
          </p>
          <div className="flex justify-left mt-6">
            <Link href="/booking">
              <button className="py-[0.7rem] px-[2.75rem] border leading-[1.5] text-black bg-white bg-clip-padding border-solid border-gray-600 rounded-3xl transition duration-150 ease-in-out hover:border-gray-400 hover:shadow-md hover:scale-105">
                <strong>Book Now!</strong>
              </button>
            </Link>
          </div>
          <p className="cm800:text-[1.2em] pt-4">
            Let’s work together to help you heal from the inside out.
          </p>
          <p className="cm800:text-[1.2em] pt-1">
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

export default ManualLymphaticDrainage;
