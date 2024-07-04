import bespoke from "/public/resources/Marta_Osteopath-373.jpg";
import nutritional from "/public/resources/Pancake.jpeg";
import packages from "/public/resources/Marta_Osteopath-224.jpg";
import buccal from "/public/resources/Marta_Osteopath-388.jpg";

export const pricingData = {
  bespokeMassage: {
    heading: `Bespoke Massage Treatment`,
    bullets: [`30 min - £70`, `60min - £115`, `90min - £155`],
    src: bespoke,
  },
  nutritionalAdvice: {
    heading: `Nutritional Advice`,
    bullets: [`Initial consultation - £155`, `Follow up - £115`],
    src: nutritional,
  },
  packages: {
    heading: `Packages`,
    bullets: [
      `Distress - £180 (90min), £220 (120min)`,
      `Happy guts - £180 (90min), £220 (120min)`,
      `Move without pain - £180 (90min), £220 (120min)`,
      `VIP - price based on the picked options.`,
    ],
    src: packages,
  },
  buccalMassage: {
    heading: `Buccal Massage`,
    bullets: [`60min - £125`],
    src: buccal,
  },
};
