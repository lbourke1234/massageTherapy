// app/layout.js or app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import Script from "next/script";
// import BootstrapClient from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MɅSSɅGE",
  description:
    "A holistic manual therapist with over a decade's experience, Marta brings together multidisciplinary approaches to offer tailored treatments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="resources/massage icon google search.ico" />
        <meta
          name="keywords"
          content="massage therapist, London, relaxation, well-being, therapy, massage services, Deep tissue, Sports, Remedial, Manual lymphatic drainage, Pregnancy, Myofascial release, Relaxing, Buccal Massage, Nutrition/Diet Advice"
        />
        <meta name="theme-color" content="#000000" />
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
        {/* <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        /> */}
        {/* <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SVK6VYVS9"></script>
        <script>
          window.dataLayer = window.dataLayer || [] function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()) gtag('config', 'G-0SVK6VYVS9');
        </script> */}
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
