import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata = {
  title: "MɅSSɅGE",
  description:
    "A holistic manual therapist with over a decade's experience, Marta brings together multidisciplinary approaches to offer tailored treatments.",
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
        <meta
          name="description"
          content="A holistic manual therapist with over a decade's experience, Marta brings together multidisciplinary approaches to offer tailored treatments. With a focus on ..."
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="A holistic manual therapist with over a decade's experience, Marta brings together multidisciplinary approaches to offer tailored treatments. With a focus on ..."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
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
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LFWV77T80R" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LFWV77T80R');
            `,
          }}
        /> */}
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
      {/* <GoogleAnalytics gaId="G-LFWV77T80R" /> */}
    </html>
  );
}
