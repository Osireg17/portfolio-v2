/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        320: "320px",
      },
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      colors: {
        navBar: "#161b22",
        primary: "#0d1117",
        textBase: "#7d8590",
        textPrimary: "#e6edf3",
        textSecondary: "#8b949e",
        accent: "#3b82f6",
        border: "#30363d",
        surface: "#161b22",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
