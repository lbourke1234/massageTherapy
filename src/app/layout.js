import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });
const inter = Inter({
  subsets: ["latin"], // Specify the character subsets you need
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the font weights you need
  display: "swap", // Optional: This can help improve the page render by swapping the font styles
});

export const metadata = {
  title: "Massage Therapy in London, Marylebone by Marta",
  description:
    "Massage therapy London, Marylebone. Treatments include manual lymphatic drainage massage, pregnancy massage, Swedish massage, deep tissue massage, sports and recovery massage.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/resources/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="keywords"
          content="massage therapist, London, relaxation, well-being, therapy, massage services, Deep tissue, Sports, Remedial, Manual lymphatic drainage, Pregnancy, Myofascial release, Relaxing, Buccal Massage, Nutrition/Diet Advice"
        />
        <meta name="theme-color" content="#000000" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        /> */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script id="cliniko-script">
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
        </Script>
      </head>
      <body className={roboto.className}>{children}</body>
      <GoogleTagManager gtmId="G-LFWV77T80R" />
    </html>
  );
}
