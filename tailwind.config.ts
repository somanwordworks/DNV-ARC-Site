import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tribe: {
          dark: "#101820",
          blue: "#0078D4",
          light: "#F5F7FA"
        },
        cineq: {
          primary: "#0B1621"
        },
        datarhino: {
          primary: "#0078D4"
        },
        academy: {
          primary: "#1E3A8A"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
