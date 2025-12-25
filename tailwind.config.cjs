/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dorovia: {
          purple: "#2B0F45",
          gold: "#C9A227",
          green: "#2F6B4F",
        },
      },
    },
  },
  plugins: [],
}
