module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/src/assets/weatherBG.jpg')",
        left: "url('/src/assets/left.jpg')",
        right: "url('/src/assets/right.jpg')",
      },
      // Define blur utilities
      blur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '36px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
