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
      dropShadow: {
        'custom': '30px 10px 4px #4444dd',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}