/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#13294B",
          dark: "#0B1A33",
        },
        accent: {
          DEFAULT: "#F5821F",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F8FA",
        },
      },
    },
  },
  plugins: [],
}

