import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#D87D4A",
          light: "#FBAF85",
        },
        neutral: {
          black: "#000000",
          dark: "#101010",
          gray: "#F1F1F1",
          gray2: "#FAFAFA",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "58px", letterSpacing: "2px" }],
        h2: ["40px", { lineHeight: "44px", letterSpacing: "1.5px" }],
        h3: ["32px", { lineHeight: "36px", letterSpacing: "1.15px" }],
        h4: ["28px", { lineHeight: "38px", letterSpacing: "2px" }],
        h5: ["24px", { lineHeight: "33px", letterSpacing: "1.7px" }],
        h6: ["18px", { lineHeight: "24px", letterSpacing: "1.3px" }],
        body: ["15px", { lineHeight: "25px" }],
        overline: ["14px", { lineHeight: "19px", letterSpacing: "10px" }],
        subtitle: ["13px", { lineHeight: "25px", letterSpacing: "1px" }],
      },
    },
  },
  plugins: [],
};
export default config;
