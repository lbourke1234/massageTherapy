import React from "react";

const TextColumn = () => {
  return (
    <div className="basis-full pt-4 h-auto cm1050:basis-3/5 text-justify cm1050:p-8 items-center justify-center flex-col flex">
      <p className="cmMobile:text-[1.2em] cm800:text-lg">Hello, I am Marta</p>
      <p className="cmMobile:text-[1.2em] cm800:text-lg">
        {`I'm a founder of `}
        <span className="font-inter">MɅSSɅGE</span>
        {`, a Certified Massage Therapist,
        Nutritional Advisor and Osteopathic and Naturopathic Medicine Student.`}
      </p>
      <p className="cmMobile:text-[1.2em] cm800:text-lg">
        {`My interest in a healthy lifestyle started many years ago when I was chronically ill, and no
        one could diagnose my condition. It took months of looking for help, trying countless
        treatments, doing research, and experimenting, and finally the source of the problem was
        found and my slow and challenging comeback to health has started. I learnt a lot through my
        own experience, and I have decided to share it with people. I gave up my career as a legal
        and business translator and interpreter to start what I have been always fascinated about -
        complementary therapy. My very first training took place in 2013, I trained in massage and
        manual therapy both abroad and in the UK, at the same time I was mastering my knowledge of
        nutrition both in Eastern and Western ways, combining it with breathing, relaxing and
        movement therapy trainings. I constantly improve my knowledge and strive to get the best
        results possible. I am currently undertaking a degree at British College of Osteopathic
        Medicine and receiving an osteopathic training at Harley Street clinic.`}
      </p>
      <p className="cmMobile:text-[1.2em] cm800:text-lg">
        {`I cannot promise to find a solution for every single issue, but I am going to do my best to
        guide you towards better health. I am interested in chronic pain management and women's
        health. I believe a holistic and multidisciplinary approach is a key to successful
        treatment, as in my understanding every condition might be a consequence of different
        variables. I created a personalized way of working with my clients, and I strive to find a
        root to the problems rather than working on symptoms alone.`}
      </p>
      <p className="cmMobile:text-[1.2em] cm800:text-lg">
        {`I was running my private studio and working at various yoga and wellbeing retreats for
        several years before moving to the UK. I have been working with patients of all age groups.
        In London I have had an opportunity to work with luxury 5-star hotels and spas, renowned
        teams of physiotherapists in Notting Hill and in Kensington, taking care of sport
        professionals (Premier League footballers), patients in pain, those who simply would like to
        improve their wellbeing.`}
      </p>
    </div>
  );
};

export default TextColumn;
