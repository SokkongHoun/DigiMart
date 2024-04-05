/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      backgroundColor: {
        custom: "#18181b",
        secondary: "#27272a",
        third: "#4a4a4c",
        brownColor: "#A52A2A",
      },
      boxShadow: {
        custom: "inset 0 0 0 1px rgba(186, 188, 243, 0.06)",
      },
      colors: {
        custom: "#fafafa",
        first: "#8e8e8f",
        secondary: "#4a4a4c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  plugins: [require("daisyui")],
};
