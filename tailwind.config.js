/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }, // Start fully transparent with no shadow
          "100%": { opacity: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }, // End fully visible with shadow
        },
        movingBorder: {
          "0%": { borderColor: "black" },
          "33%": { borderColor: "pink" },
          // "66%": { borderColor: "goldenrod" },
          "100%": { borderColor: "black" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      // Add custom animation utilities
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out", // Define the animation
        "moving-border": "movingBorder 8s infinite",
        "animate-spin": "spin 0.8s linear infinite",
      },
    },
  },
  plugins: [],
};
