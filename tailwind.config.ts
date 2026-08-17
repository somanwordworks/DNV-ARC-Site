import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:  '#162050',
        blue:  '#2aaee0',
        blue2: '#1a8fba',
        bg:    '#060c1a',
        bg2:   '#0a1228',
        bg3:   '#0e1835',
        muted: '#7a8db0',
      },
      fontFamily: {
        heading: ['var(--font-barlow-condensed)', 'sans-serif'],
        body:    ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.18em',
        widest3: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;
