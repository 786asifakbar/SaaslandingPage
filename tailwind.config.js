/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#6366F1",     // Indigo
    secondary: "#8B5CF6",   // Violet
    accent: "#06B6D4",      // Cyan
    darkBg: "#0B1120",
    lightBg: "#F8FAFC",
  },
   }
  },
  plugins: [],
}

