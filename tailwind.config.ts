import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dnv: {
          navy:     "#0B1E4F",
          navyDeep: "#070F2A",
          sky:      "#2E9EE8",
          skyLight: "#E8F4FD",
          skyMid:   "#B3D9F7",
        },
        brand: {
          cineq:   "#0B1621",
          rhino:   "#1565C0",
          noteek:  "#D97706",
          dunly:   "#0D9488",
          conteak: "#5B21B6",
        },
        surface: {
          white:  "#FFFFFF",
          off:    "#F4F6FA",
          light:  "#EBF0FA",
        },
        ink: {
          DEFAULT: "#0B1E4F",
          muted:   "#4A5578",
          faint:   "#8E97B0",
        },
      },
      fontFamily: {
        display: ["'Rajdhani'", "sans-serif"],
        body:    ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(11,30,79,0.07), 0 1px 3px rgba(11,30,79,0.04)",
        card: "0 4px 24px rgba(11,30,79,0.09), 0 1px 4px rgba(11,30,79,0.06)",
        lg:   "0 12px 40px rgba(11,30,79,0.13), 0 2px 8px rgba(11,30,79,0.07)",
        sky:  "0 4px 18px rgba(46,158,232,0.30)",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
