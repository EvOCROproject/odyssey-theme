import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://evocroproject.github.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap(),
  ],
});
