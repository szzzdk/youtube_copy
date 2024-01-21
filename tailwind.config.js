import colors from "tailwindcss/colors"

module.exports = {
  content: ["./src/**/*.{html,js, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[600],
          
        }
      }
    },
  },
  plugins: [],
}