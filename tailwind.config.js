/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        hoverBar: {
          '0%': { width: '0' },
          '100%': { width: '90%' },
        },
      },
      animation: {
        hoverBarAnim: 'hoverBar 0.3s ease-in forwards',
      },
    },
  },
  daisyui: {
    themes: ['retro', 'coffee'],
  },
};
