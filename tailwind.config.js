/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#ef4444' // Color original de Tailwind
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
