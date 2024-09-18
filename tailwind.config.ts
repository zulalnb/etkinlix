import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acme: ["var(--font-acme)"],
        galano: ["var(--font-galano)"]
      },
      colors: {
        pink: "#FF0D87",
        "dark-pink": "#E5107C",
        purple: "#B77CB8",
        orange: "#F19653",
        red: "#F07266",
        green: "#9FAE5D",
        "medium-gray": "#9C9C9C",
        "light-gray": "#DEDEDE",
        "extra-light-gray": "#F5F5F5"
      }
    },
  },
  plugins: [],
};
export default config;
