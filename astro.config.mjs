import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), image()],
  output: "server",
  adapter: netlify()
});