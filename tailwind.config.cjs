/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        10: "5rem",
        20: "10rem",
      },
      boxShadow: {
        top: "inset 0px 4px 1px rgba(0, 0, 0, 1)",
      },
      plugins: [],
    },
  },
};
