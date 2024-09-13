import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy-regular)"],
        gilroyBold: ["var(--font-gilroy-bold)"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-medium": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
