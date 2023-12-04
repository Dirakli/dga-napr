import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      minHeight: {
        "240px": "240px",
      },
      margin: {
        "30%": "30%",
      },
      width: {
        "65": "65%",
        "350": "350px",
      },
      height: {
        "210": "210px",
        "small-height": "calc(100% - 121.69px)",
        "big-height": "calc(100vh - 57.69px)",
        "smaller-height": "calc(100vh - 121.69px)",
      },
      colors: {
        "custom-blue": "#006EE5",
        "Input-value": "#466697",
        "custom-light-blue": "#466697",
        "custom-black": "#2D3748",
        "custom-gray": "#718096",
        "custom-blue-dark": "#354a74",
        "arrow-gray": "#919EAB",
        "arrow-blue": "#006EE5",
        "custom-selector-white": "#F8F8F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        graycl: "#919eab2e",
        modalBG: "#090c0f",
      },
      spacing: {
        "8px": "-8px",
      },
    },
  },
  plugins: [],
};
export default config;
