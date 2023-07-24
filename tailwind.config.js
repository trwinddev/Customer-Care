// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          "primary-login": "#0070D2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
