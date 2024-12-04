import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'green' :{
          50: '#9EFF00',
          60: '#B1FF33',
          70: '#C5FF66',
          80: '#D8FF99',
          90: '#ECFFCC',
          95: '#F5FFE5',
          97: '#F9FFF0',
          99: '#FDFFFA'
        },
        'gray' :{
          10: '#191919',
          15: '#262626',
          20: '#333333',
          30: '#4c4c4d',
          35: '#59595a',
          40: '#656567',
          60: '#98989a',
          90: '#e6e6e6'
        }
      },
      fontFamily:{
        barlow: ['var(--font-barlow)']
      }
    },
  },
  plugins: [],
} satisfies Config;
