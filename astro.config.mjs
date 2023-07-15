import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hny-blogs.vercel.app/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    image(),
    react(),
    sitemap(),
  ],
});
