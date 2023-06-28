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
          '0%': { width: '0', opacity: '1' },
          '100%': { width: '90%', opacity: '1' },
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
        webHover: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-30deg)' },
          '50%': { transform: 'translateY(10px) rotate(-30deg)' },
        },
        programHover: {
          '0%, 100%': { transform: 'translateY(0px) rotate(30deg)' },
          '50%': { transform: 'translateY(10px) rotate(30deg)' },
        },
        lifeHover: {
          '0%, 100%': { transform: 'translateY(0px) rotate(10deg)' },
          '50%': { transform: 'translateY(10px) rotate(10deg)' },
        },
      },
      animation: {
        hoverBarAnim: 'hoverBar 0.3s ease-in 1s forwards',
        heroWeb:
          'popWeb 0.3s cubic-bezier(.39,.87,.91,.48) 0.3s forwards, webHover 2s ease 0.6s infinite',
        heroProgram:
          'popProgram 0.3s cubic-bezier(.39,.87,.91,.48) 0.6s forwards, programHover 2s ease 0.9s infinite',
        heroLife:
          'popLife 0.3s cubic-bezier(.39,.87,.91,.48) 0.9s forwards, lifeHover 2s ease 1.2s infinite',
        heroAvatar: 'popAvatar 0.3s cubic-bezier(.39,.87,.91,.48) 1s forwards',
        popHover: 'popHover 1s ease infinite',
      },
    },
  },
  daisyui: {
    themes: ['retro', 'coffee'],
  },
};
