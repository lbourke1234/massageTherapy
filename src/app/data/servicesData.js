import mainNutrition from "/public/resources/webp/Jar.webp";
import subNutrition from "/public/resources/webp/nutrition-2.webp";
import sportsMassagePicHome from "/public/resources/services/Sports M.webp";
import deepTissuePicHome from "/public/resources/services/Deep Tissue.webp";
import MLDrainagePicHome from "/public/resources/services/MLDrainage.webp";
import myofascialReleasePicHome from "/public/resources/services/myofascial R.webp";
import neckShoulderPicHome from "/public/resources/services/neck and shoulder.webp";
import pregnancyPicHome from "/public/resources/services/Pregnancy.webp";
import signaturePicHome from "/public/resources/services/signature.webp";
import headPicHome from "/public/resources/webp/Marta_Osteopath-403.webp";
import relaxingPicHome from "/public/resources/services/Relaxing.webp";
import packagesPicHome from "/public/resources/webp/Marta_Osteopath-410.webp";
import buccalMassagePicHome from "/public/resources/webp/Marta_Osteopath-388.webp";

const deepTissueMassageHome = {
  name: `Deep Tissue - Remedial Massage`,
  mainImage: deepTissuePicHome,
  mainImageAlt: `Marta our Massage therapist massaging a client's calf during a relaxing therapy session.`,
  link: `/services/deep-tissue-remedial-massage`,
  className: "",
};
const sportsMassageHome = {
  name: `Sports Massage`,
  mainImage: sportsMassagePicHome,
  mainImageAlt: `Marta stretching a client's leg during a sports massage session.`,
  link: `/services/sports-massage`,
  className: "object-[center_40%]",
};
const lymphaticDrainageMassageHome = {
  name: `Manual Lymphatic Drainage`,
  mainImage: MLDrainagePicHome,
  mainImageAlt: `Lymphatic drainage massage performed by a therapist to promote circulation.`,
  link: `/services/lymphatic-drainage-massage`,
  className: "",
};
const myofascialReleaseTherapyHome = {
  name: `Myofascial Release Therapy`,
  mainImage: myofascialReleasePicHome,
  mainImageAlt: `Therapist performing myofascial massage to release muscle tension.`,
  link: `/services/myofascial-release-therapy`,
  className: "object-[center_50%]",
};
const backNeckShoulderMassageHome = {
  name: `Back, Neck & Shoulder Massage`,
  mainImage: neckShoulderPicHome,
  mainImageAlt: `Therapist giving a back, neck, and shoulder massage for muscle relief.`,
  link: `/services/back-neck-shoulder-massage`,
  className: "",
};
const pregnancyMassage = {
  name: `Pregnancy Massage`,
  mainImage: pregnancyPicHome,
  mainImageAlt: `Therapist providing a relaxing pregnancy massage for prenatal care.`,
  link: `/services/pregnancy-massage`,
  className: "",
};
const relaxingHolisticMassageHome = {
  name: `Relaxing - Holistic Massage`,
  mainImage: relaxingPicHome,
  mainImageAlt: `Therapist performing a relaxing holistic massage for overall well-being.`,
  link: `/services/relaxing-holistic-massage`,
  className: "",
};
const signatureMassageHome = {
  name: `Signature Massage`,
  mainImage: signaturePicHome,
  mainImageAlt: `Therapist delivering a signature massage tailored for relaxation and rejuvenation.`,
  link: `/services/signature-massage`,
  className: "object-[center_62%]",
};
const headMassageHome = {
  name: `Head Massage`,
  mainImage: headPicHome,
  mainImageAlt: `Therapist performing a soothing head massage to relieve tension.`,
  link: `/services/head-massage`,
  className: "",
};
const buccalMassageHome = {
  name: `Buccal Massage`,
  mainImage: buccalMassagePicHome,
  mainImageAlt: `Therapist performing a buccal massage to enhance facial contour and reduce tension.`,
  link: `/services/buccal-massage`,
  className: "",
};
const nutritionalAdvice = {
  name: `Nutritional Advice`,
  mainImage: mainNutrition,
  mainImageAlt: `Healthy Ingredients on a Chopping Board: Avocado, Eggs, and Fresh Vegetables`,
  link: `/services/nutritional-advice`,
  className: "",
};
const packages = {
  name: `Packages`,
  mainImage: packagesPicHome,
  mainImageAlt: `Healthy Ingredients on a Chopping Board: Avocado, Eggs, and Fresh Vegetables`,
  link: `/services/packages`,
  className: "",
};
export const deepTissueMassageService = {
  name: `Deep Tissue - Remedial Massage`,
  subImage: deepTissuePicHome,
  subImageAlt: `Marta our Massage therapist massaging a client's calf during a relaxing therapy session.`,
  heading: `Restorative and Calming`,
  subHeading: ``,
  howDoesItWork: [
    `Deep tissue massage offers both physical and mental relief. The treatment targets deep layers of muscle and the surrounding tissue. It involves firm pressure using slow, deep strokes.`,
  ],
  benefits: [
    `Relieves muscle pain and stiffness.`,
    `Improves circulation.`,
    `Speeds up muscle injury recovery.`,
    `Restores range of motion.`,
    `Provides deep relaxation.`,
  ],
  whoCanBenefit: [
    `Anyone experiencing muscle tension and pain from busy lifestyles, work, or sports activities can benefit from deep tissue massage. Research shows that deep tissue treatment is highly recommended for chronic pain and is considered the top massage therapy for alleviating back pain.`,
  ],
  key: 1,
};
export const sportsMassageService = {
  name: `Sports Massage`,
  subImage: sportsMassagePicHome,
  subImageAlt: `Marta stretching a client's leg during a sports massage session.`,
  heading: `Enhancing Strength and Stamina`,
  subHeading: `Designed primarily for sports professionals, but not exclusively, to enhance performance.`,
  howDoesItWork: [
    `The treatment is dynamic and involves firm pressure. It includes manipulation of soft connective tissues, such as tendons, ligaments, and muscles. Unlike other types of massage, sports massage does not always focus on the full body but targets specific areas that may be injured or overworked.`,
  ],
  benefits: [
    `Minimises the risk of sports-related injuries`,
    `Reduces pain`,
    `Breaks down scar tissue`,
    `Improves flexibility.`,
  ],
  whoCanBenefit: [
    `Anyone leading an active lifestyle who wants to boost performance, prevent injuries, or speed up recovery time.`,
  ],
  key: 2,
};
export const lymphaticDrainageMassageService = {
  name: `Manual Lymphatic Drainage`,
  subImage: MLDrainagePicHome,
  subImageAlt: `Lymphatic drainage massage performed by a therapist to promote circulation.`,
  heading: `Deep Relaxation and Energy Boost`,
  subHeading: ``,
  howDoesItWork: [
    `Manual lymphatic drainage is a gentle and calming treatment designed to stimulate the lymphatic system. It involves gently manipulating specific areas of your body to enhance lymph flow. This treatment can target a specific part of the body or be performed on the entire body. For a full-body massage, a 90-minute session is recommended.`,
  ],
  benefits: [`Reduces swelling`, `Removes toxins`, `Boosts the immune system`, `Renews tissue.`],
  whoCanBenefit: [
    `Fluid retention can affect anyone. Stress, fatigue, and prolonged periods of sitting or standing can cause swelling. This treatment is supportive for post-surgical edema, injuries, and various medical conditions (consult your GP if you're unsure whether it's right for you). It is also safe for pregnant women.`,
  ],
  key: 3,
};
export const backNeckShoulderService = {
  name: `Back, Neck & Shoulder Massage`,
  subImage: neckShoulderPicHome,
  subImageAlt: `Therapist giving a back, neck, and shoulder massage for muscle relief.`,
  heading: `Restorative and Focused`,
  subHeading: ``,
  howDoesItWork: [
    `This treatment targets common problem areas, particularly the neck and shoulders, where tension and stress often accumulate. If left untreated, this can lead to neck pain, headaches or migraines.`,
  ],
  benefits: [
    `Reduces pain`,
    `Improves range of motion`,
    `Promotes circulation`,
    `Provides deep relaxation.`,
  ],
  whoCanBenefit: [
    `This treatment is beneficial for anyone experiencing sustained postures from sitting at a desk or computer, breastfeeding, or dealing with excessive emotional stress.`,
  ],
  key: 5,
};
export const myofascialReleaseTherapyService = {
  name: `Myofascial Release Therapy`,
  subImage: myofascialReleasePicHome,
  subImageAlt: `Therapist performing myofascial massage to release muscle tension.`,
  heading: `Rejuvenating Experience`,
  subHeading: ``,
  howDoesItWork: [
    `Myofascial Release Treatment is a specialised technique that addresses the root causes of discomfort, going beyond traditional massage. This manual soft tissue procedure involves gentle stretches applied to the fascia to reduce restrictive barriers or fibrous adhesions between fascial layers.`,
  ],
  benefits: [
    `Improves range of motion`,
    `Restores flexibility`,
    `Promotes circulation`,
    `Enhances your body's natural recovery process.`,
  ],
  whoCanBenefit: [
    `Whether you're seeking relief from chronic pain, muscle tightness, or simply a way to unwind from the stresses of modern life, Myofascial Release is tailored to your unique needs. Feel the transformative effects as your body regains its natural balance and vitality.`,
  ],
  key: 4,
};
export const relaxingHolistic = {
  name: `Relaxing - Holistic Massage`,
  subImage: relaxingPicHome,
  subImageAlt: `Therapist performing a relaxing holistic massage for overall well-being.`,
  heading: `Soothing and Nurturing`,
  subHeading: ``,
  howDoesItWork: [
    `This deeply calming treatment offers a soothing escape from London's busy life. It involves a gentle full-body massage using relaxing techniques to achieve deep relaxation. Essential oils are added to enhance the experience, and a head and face massage can be included upon request.`,
  ],
  benefits: [
    `Reduces stress`,
    `Increases the level of positive hormones`,
    `Improves sleep`,
    `Boost immunity`,
    `Enhances circulation`,
    `Eases muscle pain.`,
  ],
  whoCanBenefit: [
    `Perfect for those who prefer a gentle touch and are looking for a purely relaxing experience.`,
  ],
  key: 6,
};
export const pregnancyMassageService = {
  name: `Pregnancy Massage`,
  subImage: pregnancyPicHome,
  subImageAlt: `Therapist providing a relaxing pregnancy massage for prenatal care.`,
  heading: `Taking Care of Yourself`,
  subHeading: ``,
  howDoesItWork: [
    `Pregnancy is a unique and dynamic period in a woman's life, marked by significant bodily changes. Therefore, it's important to take special care of yourself. This massage is performed in side-lying positions and on the back, and is recommended after the 12th week of pregnancy.`,
  ],
  benefits: [
    `Reduces stress`,
    `Relives muscles and joint pain`,
    `Improves blood and lymph circulation`,
    `Prevents swelling and stretch marks`,
    `Improves sleep`,
    `Reduces headaches`,
    `Promotes better posture`,
    `Boosts mood.`,
  ],
  whoCanBenefit: [
    `A pregnancy massage would benefit expectant mothers who are experiencing discomfort, stress, or tension during their pregnancy, particularly those seeking relief from back pain, swelling, or anxiety, while aiming to enhance their overall relaxation and well-being.`,
  ],
  key: 7,
};
export const signatureMassageService = {
  name: `Signature Massage`,
  subImage: signaturePicHome,
  subImageAlt: `Therapist delivering a signature massage tailored for relaxation and rejuvenation.`,
  heading: `The Massage Your Body Needs`,
  subHeading: ``,
  howDoesItWork: [
    `A Signature Massage Treatment is more than just a massage—it's a personalized experience. It combines various techniques tailored to your individual needs, creating a session specifically designed to meet your preferences. This results in a deeply healing experience that revitalizes both mind and body.`,
  ],
  benefits: [`Personalised approach`, `Customized treatment`, `Provides long-term relief`],
  whoCanBenefit: [
    `Perfect for those seeking a comprehensive, all-in-one treatment. Whether you are
dealing with chronic pain, recovering from an injury, or simply looking to unwind, I will
craft a session that is just right for you.`,
  ],
  key: 8,
};
export const buccalMassageService = {
  name: `Buccal Massage`,
  subImage: buccalMassagePicHome,
  subImageAlt: `Buccal Massage with Marta: Define Your Jawline and Refine Facial Contours`,
  heading: `The Treatment Your Jaw Needs.`,
  subHeading: ``,
  howDoesItWork: [
    `Buccal Massage, also known as intra-oral massage, is a specialised technique that targets the muscles inside the mouth. By gently manipulating these muscles, the treatment helps alleviate stress and pain, restore muscular tone and flexibility, encourage skin cell regeneration, increase circulation, and reduce puffiness.`,
    `In addition to focusing on the jaw, the treatment also addresses the face, neck, and shoulders. This is done by combining buccal massage with manual lymphatic drainage, trigger point release, and natural facelift techniques.`,
    `Please arrive at your appointment without makeup if possible. Kindly wait at least 4 weeks after receiving fillers or botulinum toxin injections before scheduling this treatment.`,
  ],
  benefits: [
    `Personalised approach`,
    `Customised treatment`,
    `Years of experience`,
    `Provides long-term relief`,
  ],
  whoCanBenefit: [
    `It is a perfect treatment for those suffering from migraines, sinusitis, tension headaches, teeth clenching, or the TMD's (Temporomandibular Joint Disorders).`,
    `The treatment lasts 60 minutes, not including time for changing or asking questions. Please allow an additional 15 minutes for these purposes.`,
    `During my treatments I only use carefully selected certified products manufactured by local businesses.`,
  ],
  key: 10,
};
export const headMassageService = {
  name: `Head Massage`,
  subImage: headPicHome,
  subImageAlt: `Therapist performing a soothing head massage to relieve tension.`,
  heading: `A Peaceful Retreat`,
  subHeading: ``,
  howDoesItWork: [
    `Designed to melt away stress and tension using gentle, rhythmic strokes to soothe your scalp, alleviate tension, and stimulate circulation. This leaves you feeling refreshed and invigorated.`,
  ],
  benefits: [
    `Reduces stress`,
    `Increases the level of positive hormones`,
    `Improves sleep`,
    `Boost immunity`,
  ],
  whoCanBenefit: [
    `Perfect for relieving headaches, reducing stress, or simply indulging in a moment of pure
tranquillity.`,
  ],
  key: 9,
};
export const nutritionalAdviceService = {
  name: `Nutritional Advice`,
  subImage: subNutrition,
  subImageAlt: `Healthy Ingredients on a Chopping Board: Avocado, Eggs, and Fresh Vegetables`,
  heading: `“Let food be thy medicine and medicine be thy food”`,
  subHeading: `Hippocrates`,
  howDoesItWork: [
    `As a certified Traditional Chinese Medicine Nutritionist and Diet and Nutritional Advisor, my journey into healthy eating began with my personal experience and chronic illness. I combine Western and Eastern knowledge to offer a holistic approach to nutrition.`,
    `I believe that food is medicine, and your diet can significantly improve your quality of life. I am not a fan of overly restrictions or complex diets, but I am here to help you understand what type of food is best for you. Together, we'll make changes to boost your energy, ease discomfort, decrease flare-ups, or lose weight. Proper nutrition can improve both your physical and mental well-being`,
    `Adjusting your diet might seem daunting, but I am here to make it as simple as possible. Consultations are available in London and online.`,
  ],
  benefits: [
    `Personalised approach`,
    `Customised diet plans`,
    `Years of experience`,
    `Long-lasting results`,
  ],
  whoCanBenefit: [
    `This service is ideal for anyone looking to understand nutrition better, those overwhelmed by conflicting information, individuals experiencing discomfort or chronic conditions, and anyone aiming to improve their overall well-being.`,
    `Please note that I do not count calories. Instead, my focus is on educating you about how the right foods can enhance your health so you can easily follow a balanced diet on your own.`,
    `The initial consultation lasts 60 minutes, and you will receive a 4-week program to follow before the follow-up appointment. If you would like to purchase the Happy guts package for the initial consultation, please choose the 120-minute option.`,
  ],
  key: 11,
};
export const packageService = {
  name: `Packages`,
  subImage: packagesPicHome,
  subImageAlt: `Marta giving a massage with her arms in a peaceful way, showcasing various massage techniques`,
  heading: `“The first wealth is health”`,
  subHeading: `Ralph Waldo Emerson`,
  howDoesItWork: [
    `I offer Packages to help you get the most out of your personal experience. Each package combines massage therapy with another tool to enhance the many benefits of your session. You may choose between a 90-minute package and a 120-minute one.`,
  ],
  benefits: [
    `Personalised approach`,
    `Tailored action plan`,
    `Years of experience`,
    `Long-lasting results`,
  ],
  whoCanBenefit: [
    `Anyone who wants to combine multiple tools to make their experience exceptional and achieve greater outcomes.`,
    `Recommended: Track your progress picking 3, 5 or 7 sessions.`,
  ],
  key: 12,
};

export const homePageServicesMap = [
  deepTissueMassageHome,
  sportsMassageHome,
  lymphaticDrainageMassageHome,
  myofascialReleaseTherapyHome,
  backNeckShoulderMassageHome,
  pregnancyMassage,
  relaxingHolisticMassageHome,
  signatureMassageHome,
  headMassageHome,
  buccalMassageHome,
  nutritionalAdvice,
  packages,
];
