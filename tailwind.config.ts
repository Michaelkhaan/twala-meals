import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        heroCard: "0px 4px 6.3px 0px #00000040",
      },
      fontFamily: {
        OpenSans: ["var(--Open_sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
