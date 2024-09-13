// import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Massage Therapy in Marylebone, London by Marta",
  description:
    "Massage therapy London, Marylebone. Treatments include manual lymphatic drainage massage, pregnancy massage, Swedish massage, deep tissue massage, sports and recovery massage.",
  keywords:
    "massage therapist, London, relaxation, well-being, therapy, massage services, Deep tissue, Sports, Remedial, Manual lymphatic drainage, Pregnancy, Myofascial release, Relaxing, Buccal Massage, Nutrition/Diet Advice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="omBTpT9zp6ubL8-0VLhFRg5HmcdKO2txnR_cTq9a9No"
        />
        <link rel="icon" href="/resources/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={roboto.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-TGGDXMM8" />
    </html>
  );
}
