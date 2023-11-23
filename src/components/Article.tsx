import Prism from 'prismjs';
import { useEffect } from 'react';

type Props = {
  body: string;
};

export default function Article({ body }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <article
      className='sm:px-6 prose sm:prose-lg max-w-none 
        // Universal
        [&>*]:pb-4

        // Header 2
        prose-h2:font-bold 
        prose-h2:text-2xl 
        prose-h2:mt-6 


        // Header 3
        prose-h3:font-bold
        prose-h3:text-2xl
        prose-h3:mt-6

        // Anchor
        prose-a:underline
        prose-a:font-bold
        prose-a:stroke-gray-800
        prose-a:transition
        prose-a:text-[hsl(var(--af))]
        prose-a:drop-shadow-none
        hover:prose-a:drop-shadow-[0_1px_1px_hsl(var(--a))]

        // Blockquote
        prose-blockquote:px-4
        prose-blockquote:py-2
        prose-blockquote:my-2
        prose-blockquote:ml-3
        prose-blockquote:border-l-4
        prose-blockquote:border-[hsl(var(--p))]
        prose-blockquote:bg-[hsl(var(--b2))]
        prose-blockquote:rounded-r-lg
        prose-blockquote:italic

        // Ordered List
        prose-ol:list-decimal
        prose-ol:ml-6
        
        // Unordered List 
        prose-ul:list-disc
        prose-ul:ml-6
        
        // List items
        prose-li:my-1

        // Images
        prose-img:mx-auto
        prose-img:left-0
        prose-img:right-0
        prose-img:border-b-2
        prose-img:border-b-[hsl(var(--p))]
        prose-img:pb-2

        // Code
        prose-code:text-[hsl(var(--in))]

      '
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
