import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        noto: ["var(--font-noto)"],
        tiro: ["var(--font-tiro)"],
      },
      colors: {

        white: "#FFFFFF",
        black: "#000000",
        priColor: "#3F51B5",
        priHover: "#303F9F",
        secColor: "#03A9F4",
        secHover: "#039BE5",
        danger: "#F44336",
        accent: "#4CAF50",
        background: "#F9FAFB",
        boxBgColor: "#F3FAFE",
        secBgColor: "#e3e7ff",
        priTextColor: "#1F2937",

        linkTextColor: "#03A9F4",
        linkTextHover: "#0288D1",

        secTextColor: "#6B7280",
        placeholderColor: "#9CA3AF",

        purple: {
          50: "#F2EAFA",
          100: "#E4D4F4",
          200: "#C9A9E9",
          300: "#AE7EDE",
          400: "#9353D3",
          500: "#3F51B5",
          600: "#303F9F",
          700: "#481878",
          800: "#301050",
          900: "#180828",
        },
        green: {
          50: "#E8FAF0",
          100: "#D1F4E0",
          200: "#A2E9C1",
          300: "#74DFA2",
          400: "#45D483",
          500: "#17C964",
          600: "#12A150",
          700: "#0E793C",
          800: "#095028",
          900: "#052814",
        },
        zinc: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#3F51B5",
              foreground: "#FFFFFF",
            },
            focus: "#3F51B5",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#3F51B5",
              foreground: "#FFFFFF",
            },
            focus: "#3F51B5",
          },
        },
      },
    }),
  ]
};