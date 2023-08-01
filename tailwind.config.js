// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          "primary-login": "#0070D2",
          "secondary-blue": "rgba(0, 112, 210, 0.8)",
        },
        orange: {
          "primary-color": "#DD7A01",
          "rgba-one": "rgba(250, 200, 164, 0.3)",
          "rgba-two": "rgba(255, 182, 33, 0)",
        },
        gray: {
          "text-gray": "rgba(164, 164, 164, 1)",
          "bg-table": "rgba(240, 242, 244, 0.5)",
        },
        green: {
          "green-notice": "rgba(11, 142, 17, 1)",
        },
        red: {
          "red-notice": "rgba(219, 82, 78, 1)",
          "red-bg": "rgba(255, 218, 218, 1)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  content: ["node_modules/preline/dist/*.js"],
  plugins: [require("preline/plugin")],
};
