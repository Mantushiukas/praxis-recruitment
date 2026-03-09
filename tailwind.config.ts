import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-montserrat)',
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          primary: '#36323d',
          accent: '#a885ed',
          white: '#ffffff',
        },
        primary: {
          DEFAULT: '#36323d',
          50: '#f5f4f5',
          100: '#e8e7e9',
          200: '#d4d2d6',
          300: '#b5b2b8',
          400: '#8f8b94',
          500: '#36323d',
          600: '#312d36',
          700: '#2b2830',
          800: '#252229',
          900: '#1f1d23',
        },
        accent: {
          DEFAULT: '#a885ed',
          50: '#f6f2fd',
          100: '#ede6fb',
          200: '#ddd1f7',
          300: '#c5b0f1',
          400: '#a885ed',
          500: '#a885ed',
          600: '#9468e6',
          700: '#7d4fdb',
          800: '#6a42c2',
          900: '#58379f',
        },
      },
      fontWeight: {
        ultralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
    },
  },
  plugins: [],
};

export default config;
