import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// importa qui le altre integrazioni che avevi prima, se ci sono
// es: import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://evocroproject.github.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap(),
    // tailwind(), ecc. se già presenti
  ],
});
