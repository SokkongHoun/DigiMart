/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom: "#343435",
        secondary: "#4a4a4c",
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
};
