/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      animation: {
        float: "float 2s ease-in-out infinite",
      },

      colors: {
        maintext: "#FFFFF",
        secondarytext: "#D1D5DB",
        trirdtext: "#9CA3AF ",
        acentocyan: "#67E8F9",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "transLateY(0)" },
          "50%": { transform: "transLateY(8px)" },
        },
      },
    }
  },
  plugins: [],
}


