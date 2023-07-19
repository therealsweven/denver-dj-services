/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: {
      mytheme: {
        primary: "#e384ff",

        secondary: "#58c7f3",

        accent: "#7e53ff",

        neutral: "#221551",

        "base-100": "#191825",

        info: "#53c0f3",

        success: "#71ead2",

        warning: "#f3cc30",

        error: "#e24056",
      },
    },
  },
  plugins: [require("daisyui")],
};
