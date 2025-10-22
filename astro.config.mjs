import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import astroIcon from 'astro-icon';

export default defineConfig({
  site: 'https://EvOCROproject.github.io/odyssey-theme/',
  base: '/odyssey-theme/',
  outDir: './docs',
  integrations: [lit(), astroIcon()],
});
