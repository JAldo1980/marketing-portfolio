// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add JSX/TSX file types
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#fafafa",
        customBlue: "#1b5b8e",
        customGreen: "#98dbc6",
      },
    },
  },
  plugins: [],
};
