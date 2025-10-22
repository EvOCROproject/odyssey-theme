import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://EvOCROproject.github.io/odyssey-theme/',
  base: '/odyssey-theme/',
  integrations: [lit(), icon(), mdx()],
});
