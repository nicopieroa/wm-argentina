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
      },
    },
    screens: {
      smMin: "600px",
      mdMin: "760px",
      lgMin: "900px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
      xxxl: "1536px",
    },
  },
  plugins: [],
};
