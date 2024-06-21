/** @type {import('tailwindcss/plugin')} */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss/defaultTheme')} */
import dt from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
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
      colors: {
        brand: {
          dark: {
            1: "#1c1e1d",
            2: "#121212",
            3: "#171717",
            4: "#1a1a1a",
            5: "#212121",
          },
          gray: {
            1: "#353535",
            2: "#cacaca",
            3: "#5c5c5c",
            4: "#525252",
            5: "#d0d0d0",
            6: "#f5f5f4",
            7: "#707070",
          },
          green: {
            1: "#006c2e",
            2: "#c1fdda",
            3: "#73A588",
            4: "#f1f8f1",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "95vw",
          "@screen lg": {
            maxWidth: "90vw",
          },
          "@screen 2xl": {
            maxWidth: "1513px",
          },
        },
      });
    }),
  ],
};
