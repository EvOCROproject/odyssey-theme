import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://EvOCROproject.github.io/odyssey-theme/',
  base: '/odyssey-theme/',
  outDir: './docs',          // Pages -> Deploy from branch -> /docs
  integrations: [lit(), icon(), mdx()],
});
