import { useState, useEffect } from 'react';

export default function ThemeSwap() {
  const [theme, setTheme] = useState<string>();
  const [check, setCheck] = useState(theme === 'retro' ? false : true);

  useEffect(() => {
    setTheme(localStorage.getItem('theme') as string);
    console.log(theme);
    setCheck(theme === 'retro' ? false : true);
  }, [theme]);


  return (
    <label className='swap swap-rotate fixed bottom-1.5 right-4 sm:right-1/4 md:right-[30%] z-50 hover:text-[hsl(var(--a))] hover:transition active:hover:text-[hsl(var(--af))]'>
      <input
        type='checkbox'
        id='check'
        checked={check}
        onChange={() => setCheck((prev) => !prev)}
      />

      {/* Moon */}
      <svg
        data-set-theme='coffee'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-moon swap-on'
      >
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
      </svg>

      {/* Sun */}
      <svg
        data-set-theme='retro'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-sun swap-off'
      >
        <circle cx='12' cy='12' r='5'></circle>
        <line x1='12' y1='1' x2='12' y2='3'></line>
        <line x1='12' y1='21' x2='12' y2='23'></line>
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
        <line x1='1' y1='12' x2='3' y2='12'></line>
        <line x1='21' y1='12' x2='23' y2='12'></line>
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
      </svg>
    </label>
  );
}
