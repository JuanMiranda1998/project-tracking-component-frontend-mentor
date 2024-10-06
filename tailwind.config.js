/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow : {
        'menuShadow' : '0px 0px 5px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

