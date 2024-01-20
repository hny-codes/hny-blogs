import { useState } from 'react';

type Props = {
  url: string;
  social: 'Twitter' | 'Link';
};

export default function ShareButton({ url, social }: Props) {
  const [view, setView] = useState(false);

  const handleLink = () => {
    switch (social) {
      case 'Twitter':
        return;
      case 'Link':
        navigator.clipboard.writeText(url);
        setView(true);
        console.log(view);
        setTimeout(() => {
          setView(false);
          console.log(view);
        }, 1000);
    }
  };

  return (
    <>
      <button
        className='btn rounded-3xl border-2 bg-[hsl(var(--p))] hover:bg-[hsl(var(--pf))]'
        onClick={handleLink}
      >
        {/* Twitter */}
        {social === 'Twitter' && (
          <a href={`https://twitter.com/intent/tweet?text=${url}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path
                fill='#000000'
                d='M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z'
              />
            </svg>
          </a>
        )}

        {/* Any Other Link */}
        {social === 'Link' && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='#000000'
              d='M11 17H7q-2.075 0-3.537-1.463T2 12q0-2.075 1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12q0 2.075-1.463 3.538T17 17z'
            />
          </svg>
        )}
      </button>
      {social === 'Link' && (
        <span
          className={`toast toast-center origin-left xl:px-10 transition-all absolute bottom-12 ${
            !view ? 'invisible animate-toastExit' : 'visible animate-toastEnter'
          }`}
        >
          <span className='alert alert-info sm:pr-0 font-semibold'>
            Copied !
          </span>
        </span>
      )}
    </>
  );
}
