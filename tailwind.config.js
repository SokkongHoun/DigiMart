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
        custom: "#13151a",
      },
      boxShadow: {
        custom: "inset 0 0 0 1px rgba(186, 188, 243, 0.06)",
      },
      colors: {
        custom: "#fafafa",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// .glassmorphism {
//   background: rgba(186, 188, 243, 0.06);
//   box-shadow: inset 0 0 0 1px rgba(186, 188, 243, 0.06);
//   border: none;
//   color: var(--text-color-primary);
// }
