"use client";

import React, { useState } from "react";
import { sendContactForm } from "@/util/helper";
import Toast from "./Toast";

const ContactForm = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const [form, setForm] = useState({ name: "", fromEmail: "", message: "", phoneNumber: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactForm(form);
    } catch (error) {
      setEmailFailed(true);
    }
    setEmailSent(true);
  };

  return (
    <>
      <div className="bg-[#EFEBE0] text-black flex flex-wrap" id="contact">
        <div className="cmMobile:pt-8 cm700:pt-0 cmMobile:basis-full cm700:basis-1/2 flex flex-col justify-center items-center">
          <div className="cmMobile:text-center cm700:text-left cmMobile:w-[90%] cm700:w-3/5">
            <p className="cm700:text-2em">Haven’t found an appointment time that suits you?</p>
            <p className="cm700:text-2em">
              Contact me and we will find the right solution for you!
            </p>
          </div>
        </div>
        <div className="cmMobile:basis-full cm700:basis-1/2">
          <form
            className="max-w-[80%] mx-auto cm700:py-8 cmMobile:py-0 cmMobile:pb-8"
            onSubmit={(e) => onSubmit(e)}
          >
            <h5 className="cmMobile:text-2xl cm700:text-2em pb-4 text-center font-medium">
              Get in Touch
            </h5>
            <div className="flex flex-wrap">
              <input
                className="cmMobile:text-[0.8em] cm700:text-[0.9em] w-full p-[10px] mb-[20px] border-1 border-gray-300 rounded-md "
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="cmMobile:text-[0.8em] cm700:text-[0.9em] w-full p-[10px] mb-[20px] border-1 border-gray-300 rounded-md "
                type="text"
                id="number"
                name="number"
                placeholder="Phone Number"
                onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
              />
            </div>
            <input
              className="cmMobile:text-[0.8em] cm700:text-[0.9em] w-full p-[10px] mb-[20px] border-1 border-gray-300 rounded-md "
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, fromEmail: e.target.value })}
            />

            <textarea
              className="cmMobile:text-[0.8em] cm700:text-[0.9em] w-full p-[10px] mb-[20px] border-1 border-gray-300 rounded-md "
              as="textarea"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button
              className="py-[0.7rem] px-[2.75rem] border-1 leading-[1.5] text-black bg-white bg-clip-padding border-solid rounded-3xl transition duration-150 ease-in-out border-gray-300 hover:shadow-md hover:scale-105"
              type="submit"
            >
              Submit
            </button>
          </form>
          {emailSent && (
            <div className="flex justify-center rounded-[25px]">
              <Toast message={"Your message has been sent successfully!"} />
            </div>
          )}
          {emailFailed && (
            <div className="flex justify-center rounded-[25px]">
              <Toast message={"Something went wrong while sending your email!"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
