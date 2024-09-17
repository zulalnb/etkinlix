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
        purple: "#B77CB8",
        orange: "#F19653",
        red: "#F07266",
        green: "#9FAE5D",
        "medium-grey": "#9C9C9C",
        "extra-light-grey": "#F5F5F5"
      }
    },
  },
  plugins: [],
};
export default config;
