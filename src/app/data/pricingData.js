import bespoke from "/public/resources/webp/Marta_Osteopath-373.webp";
import nutritional from "/public/resources/webp/Pancake.webp";
import packages from "/public/resources/webp/Marta_Osteopath-224.webp";
import buccal from "/public/resources/webp/Marta_Osteopath-388.webp";

export const pricingData = {
  bespokeMassage: {
    heading: `Bespoke Massage Treatment`,
    bullets: [`30 min - £70`, `60min - £115`, `90min - £155`],
    src: bespoke,
    alt: "Marta's Sports Massage: Expert Techniques for Enhanced Performance and Recovery",
  },
  nutritionalAdvice: {
    heading: `Nutritional Advice`,
    bullets: [`Initial consultation - £155`, `Follow up - £115`],
    src: nutritional,
    alt: "Healthy pancake topped with fresh berries for a nutritious breakfast",
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
    alt: "Marta giving a relaxing massage to a client, showing professional massage therapy techniques",
  },
  buccalMassage: {
    heading: `Buccal Massage`,
    bullets: [`60min - £125`],
    src: buccal,
    alt: "Marta giving a neck massage to a client, demonstrating professional massage techniques",
  },
};
