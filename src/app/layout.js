import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Massage Therapy in London, Marylebone by Marta",
  description:
    "Massage therapy London, Marylebone. Treatments include manual lymphatic drainage massage, pregnancy massage, Swedish massage, deep tissue massage, sports and recovery massage.",
  keywords:
    "massage therapist, London, relaxation, well-being, therapy, massage services, Deep tissue, Sports, Remedial, Manual lymphatic drainage, Pregnancy, Myofascial release, Relaxing, Buccal Massage, Nutrition/Diet Advice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/resources/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        {/* <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
          strategy="beforeInteractive"
        /> */}
        {/* <Script id="cliniko-script">
          {`
          window.addEventListener('message', function handleIFrameMessage (e) {
            var clinikoBookings = document.getElementById('cliniko-82158340');
            if (typeof e.data !== 'string') return;
            if (e.data.search('cliniko-bookings-resize') > -1) {
              var height = Number(e.data.split(':')[1]);
              clinikoBookings.style.height = height + 'px';
            }
            e.data.search('cliniko-bookings-page') > -1 && clinikoBookings.scrollIntoView();
          });
        `}
        </Script> */}
      </head>
      <body className={roboto.className}>{children}</body>
      <GoogleTagManager gtmId="G-LFWV77T80R" />
    </html>
  );
}
