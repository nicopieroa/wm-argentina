/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      width: {
        13: "50px",
        85: "356px",
      },
      height: {
        85: "356px",
      },
      padding: {
        twoDotFivePercent: "2.5%",
        fivePercent: "5%",
        tenPercent: "10%",
        fifteenPercent: "15%",
        twentyPercent: "20%",
        twentyFivePercent: "25%",
        thirtyPercent: "30%",
        thirtyFivePercent: "35%",
        fortyPercent: "40%",
        fortyFivePercent: "45%",
        fiftyPercent: "50%",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
