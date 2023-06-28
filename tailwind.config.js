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
        popWeb: {
          '0%': { transform: 'scale(0) rotate(-30deg)', opacity: '1' },
          '80%': { transform: 'scale(1.5) rotate(-30deg) ', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(-30deg) ', opacity: '1' },
        },
        popProgram: {
          '0%': { transform: 'scale(0) rotate(30deg)', opacity: '1' },
          '80%': { transform: 'scale(1.5) rotate(30deg) ', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(30deg) ', opacity: '1' },
        },
        popLife: {
          '0%': { transform: 'scale(0) rotate(10deg)', opacity: '1' },
          '80%': { transform: 'scale(1.5) rotate(10deg) ', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(10deg) ', opacity: '1' },
        },
        popAvatar: {
          '0%': { transform: 'scale(0) ', opacity: '1' },
          '80%': { transform: 'scale(2) ', opacity: '1' },
          '100%': { transform: 'scale(1) ', opacity: '1' },
        },
      },
      animation: {
        hoverBarAnim: 'hoverBar 0.3s ease-in forwards',
        heroWeb: 'popWeb 0.3s cubic-bezier(.39,.87,.91,.48) 0.3s forwards',
        heroProgram:
          'popProgram 0.3s cubic-bezier(.39,.87,.91,.48) 0.6s forwards',
        heroLife: 'popLife 0.3s cubic-bezier(.39,.87,.91,.48) 0.9s forwards',
        heroAvatar:
          'popAvatar 0.3s cubic-bezier(.39,.87,.91,.48) 1s forwards',
      },
    },
  },
  daisyui: {
    themes: ['retro', 'coffee'],
  },
};
