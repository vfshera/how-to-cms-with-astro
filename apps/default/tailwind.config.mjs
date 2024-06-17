/** @type {import('tailwindcss/defaultTheme')} */
import dt from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...dt.fontFamily.serif],
        lora: ["Lora Variable", ...dt.fontFamily.serif],
        "bebas-neue": ["Bebas Neue", ...dt.fontFamily.serif],
        inter: ["Inter Variable", ...dt.fontFamily.serif],
        sora: ["Sora Variable", ...dt.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
