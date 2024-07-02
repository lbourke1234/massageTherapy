/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        "-130px": "-130px",
        "-210px": "-210px",
        "0px": "0",
      },
      fontSize: {
        "1em": "1em",
        "2em": "2em",
        "3em": "3em",
      },
      colors: {
        customYellow: "rgb(253, 180, 42)",
        blackOpacity20: "rgba(0, 0, 0, 0.2)",
        navbarColor: "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        cm1500: "1500px",
        cm1300: "1300px",
        cm1230: "1230px",
        cm1200: "1200px",
        cm1160: "1160px",
        cm1050: "1050px",
        cm1000: "1000px",
        cm992: "992px",
        cm991: "991px",
        cm900: "900px",
        cm800: "800px",
        cm700: "700px",
        cm600: "600px",
        cm543: "543px",
        cm500: "500px",
        cm470: "470px",
        cm450: "450px",
        cm400: "400px",
        cm331: "331px",
        cm320: "320px",
        cmMobile: "1px",
      },
    },
  },
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
      },
    ],
  ],
  compiler: {
    styledComponents: true,
  },
};
