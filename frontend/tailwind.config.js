/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        crest: {
          50: "#f1f7f6",
          100: "#dcebe8",
          200: "#b8d6d0",
          300: "#8fbdb3",
          400: "#5f9d92",
          500: "#3f7f74",
          600: "#2f655c",
          700: "#27514a",
          800: "#22413c",
          900: "#1d3732"
        },
        sand: {
          50: "#fbf8f2",
          100: "#f4ecdd",
          200: "#e8d9bb"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"]
      }
    }
  },
  plugins: []
};
