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
          primary: '#23232F',
          accent: '#7756B5',
          white: '#ffffff',
        },
        primary: {
          DEFAULT: '#23232F',
          50: '#f4f4f6',
          100: '#e8e8ec',
          200: '#d0d0d8',
          300: '#a8a8bb',
          400: '#7a7a94',
          500: '#23232F',
          600: '#1f1f2a',
          700: '#1a1a24',
          800: '#15151e',
          900: '#101018',
        },
        accent: {
          DEFAULT: '#7756B5',
          50: '#f3f0fa',
          100: '#e7e0f5',
          200: '#d0c4ed',
          300: '#b09ae0',
          400: '#9070d0',
          500: '#7756B5',
          600: '#6645a0',
          700: '#553688',
          800: '#462c72',
          900: '#39245e',
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
