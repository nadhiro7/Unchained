import { it } from "node:test";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["dark"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: '20px',
        lg: '40px',
        xl: '120px',
        '2xl': '120px',
      },

    },
    fontSize: {
      "heading11-bold": [
        "50px",
        {
          lineHeight: "84px",
          fontWeight: "600",
        },
      ],
      "button-medium-size": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "button-large-size": [
        "18px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "caption": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "body-medium": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "body-light": [
        "16px",
        {
          lineHeight: "40px",
          fontWeight: "300",
          letterSpacing: "0.025em",
        },
      ],
      "body-regular": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          letterSpacing: "0.025em",
        },
      ],
      "body-bold": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "700",
          letterSpacing: "0.025em",
        },
      ],
      "eyebrow": [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "extra-small-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          letterSpacing: "0.025em",
        },
      ],
      "extra-small": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "400",
          letterSpacing: "0.025em",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "16px",
          fontWeight: "600",
          letterSpacing: "0.025em",
        },
      ],
      "small": [
        "14px",
        {
          lineHeight: "17px",
          fontWeight: "400",
          letterSpacing: "0.025em",
        },
      ],
      "quote": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0.025em",
          fontStyle: "italic",
        },
      ],
      "link": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
      "h4": [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "700",
          letterSpacing: "0.025em",
        },
      ],
      "h3": [
        "48px",
        {
          lineHeight: "56px",
          fontWeight: "700",
          letterSpacing: "-0.025em",
        },
      ],
      "h2": [
        "56px",
        {
          lineHeight: "64px",
          fontWeight: "700",
          letterSpacing: "-0.025em",
        },
      ],
      "h1": [
        "64px",
        {
          lineHeight: "72px",
          fontWeight: "700",
          letterSpacing: "-0.025em",
        },
      ],
      "display": [
        "72px",
        {
          lineHeight: "80px",
          fontWeight: "700",
          letterSpacing: "-0.025em",
        },
      ],
      "base": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
          letterSpacing: "0.025em",
        },
      ],
    },
    extend: {
      fontFamily: {
        "Satoshi-Light": ['Satoshi-Light', 'sans-serif'],
        "Satoshi-LightItalic": ['Satoshi-LightItalic', 'sans-serif'],
        "Satoshi-Regular": ['Satoshi-Regular', 'sans-serif'],
        "Satoshi-Italic": ['Satoshi-Italic', 'sans-serif'],
        "Satoshi-Medium": ['Satoshi-Medium', 'sans-serif'],
        "Satoshi-MediumItalic": ['Satoshi-MediumItalic', 'sans-serif'],
        "Satoshi-Bold": ['Satoshi-Bold', 'sans-serif'],
        "Satoshi-BoldItalic": ['Satoshi-BoldItalic', 'sans-serif'],
        "Satoshi-Black": ['Satoshi-Black', 'sans-serif'],
        "Satoshi-BlackItalic": ['Satoshi-BlackItalic', 'sans-serif'],
        "Satoshi-Variable": ['Satoshi-Variable', 'sans-serif'],
        "Satoshi-VariableItalic": ['Satoshi-VariableItalic', 'sans-serif'],
      },
      colors: {
        "primary-500": "#F46630",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        glassmorphism: "radial-gradient(109.66% 100% at 50% 0%, rgba(255, 255, 255, 0.1) 0%, rgba(30, 40, 51, 0.1) 100%)",
      },
      boxShadow: {

      },
      screens: {
        xs: "428px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "1728px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  }
};