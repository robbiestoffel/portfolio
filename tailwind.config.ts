import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'kalam': ['kalam']
    },
    colors: {
      'white': "#FFFFFF",
      'black': "#000000",
      'blue': '#1fb6ff',
      'indigo': '#1e1b4b',
      'violet': {
        900: '#4c1d95',
        950: '#2e1065',
      },
      'purple': '#3b0764',
      'pink': '#500724',
      'rose': {
        900: '#881337',
        950: '#4c0519',
      },
      'stone': {
        100: '#f5f5f4',
        300: '#d6d3d1',
      },
      'dark': {
        100: '#b8b8b8',
        200: '#828282',
        300: '#696969',
        400: '#424242',
        500: '#3b3b3b',
        700: '#242424',
        800: '#1f1f1f',
        900: '#141414',
      },
      'brown': {
        400: '#C4A484',
        500: '#483C32',
        600: '#5C4033',
        700: '#262422',
        800: '#281b0d',
        850: '#1e140a',
        900: '#140d07',
        950: '#0a0703',
      },
    }
  },
  plugins: [],
};
export default config;
