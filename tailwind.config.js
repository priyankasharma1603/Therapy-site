module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        gopher: ["var(--font-gopher)"],
      },
      colors: {
        lilac: "#CF9FFF",
        cream: "#f8f3ed",
        forest: "#223614",
      }
    },
  },
  plugins: [],
};