/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cream': '#EFEEE5', // Adding your custom color
      },
    },
  },
  plugins: [],
}
