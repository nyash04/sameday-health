module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1000px",
      xl: "1200px",
      "2xl": "1600px",
    },
    container: {
      padding: "1.25rem",
      center: true,
    },
    fontFamily: {
      sans: ["Graphie", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-light": "#F0F7FF",
        primary: "#24547A",
        dark: "#242424",
        "theme-gray-100": "#EDEDED",
        "theme-gray-500": "#9C9C9C",
      },
      backgroundImage: (theme) => ({
        checked: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      }),
    },
  },
  variants: {
    container: [],
    extend: {
      backgroundColor: ["active", "checked"],
      backgroundImage: ["active", "checked"],
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
