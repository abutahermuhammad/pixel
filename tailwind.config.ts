import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F33838",
        gray: "#B4B4B4",
        "dark-grey": "#737373",
        "light-gray": "#E9E9E9",
        "light-primary": "#EFB5B5",
        white: "#FCF6F6",
        black: "#1A1A1A",
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      fontSize: {
        base: "16px",
      }
    },
  },
  plugins: [],
};
export default config;
