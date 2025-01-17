/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#eb5253",
        customYellow: "#fcc858",
        customBlue: "#3a9dff",
      },
    },
  },
  plugins: [],
};
