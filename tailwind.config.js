/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1210px",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "ui-sans-serif"],
    },
    extend: {
      colors: {
        green: {
          50: "#f1f8f4",
          100: "#ddeee2",
          200: "#bdddc9",
          300: "#91c4a8",
          400: "#62a582",
          500: "#418865",
          600: "#2f6b4f",
          700: "#265640",
          800: "#204535",
          900: "#1b392c",
        },
        ebonyClay: {
          50: "#f6f6f9",
          100: "#ecedf2",
          200: "#d4d6e3",
          300: "#aeb3cb",
          400: "#8289ae",
          500: "#626a95",
          600: "#4e547b",
          700: "#404464",
          800: "#383b54",
          900: "#2a2c3d",
        },
        alto: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d9d9d9",
          400: "#b4b4b4",
          500: "#9a9a9a",
          600: "#818181",
          700: "#6a6a6a",
          800: "#5a5a5a",
          900: "#4e4e4e",
        },
      },
    },
  },
  plugins: [],
}
