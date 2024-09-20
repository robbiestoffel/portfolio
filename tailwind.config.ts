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
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray': {
        500: '#6b7280',
        900: '#111827',
      },
      'slate': {
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617',
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
      'stone': '#d6d3d1',
      'rose': '#881337',
    }
  },
  plugins: [],
};
export default config;
