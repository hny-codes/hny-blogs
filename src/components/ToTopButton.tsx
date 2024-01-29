import useScrollPosition from '../hooks/useScrollPosition';

export default function ToTopButton() {
  const [position] = useScrollPosition();

  // Vertical distance of scroll bar, adjust to change visibility of button
  const scrollLimit = 200;

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      onClick={handleClick}
      className={`btn rounded-3xl border-2 border-[hsl(var(--pf))] bg-[hsl(var(--p))] hover:bg-[hsl(var(--pf))] fill-[hsl(var(--pf))] fixed bottom-20 right-4 lg:right-16 xl:right-32 2xl:right-64 px-2  ${
        position > scrollLimit ? 'block' : 'hidden'
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
      >
        <path
          fill='#000000'
          d='M12 13.825L8.1 17.7q-.275.275-.687.288T6.7 17.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213t.375-.062q.2 0 .375.062t.325.213l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275zm0-6L8.1 11.7q-.275.275-.687.288T6.7 11.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 5.425q.2 0 .375.063t.325.212l4.6 4.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z'
        />
      </svg>
    </button>
  );
}
