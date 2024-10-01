/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ["Dancing Script", "cursive"],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      boxShadow: {
        'custom': '0px 10px 78px -9px rgba(102, 101, 102, 0.86)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}