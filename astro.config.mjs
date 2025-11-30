import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroIcon from 'astro-icon'; // ⬅️ questo è il plugin che manca
import lit from '@astrojs/lit'; // ⬅️ integrazione per ThemeSwitcher

export default defineConfig({
  site: 'https://evocroproject.github.io',
  base: '/',
  integrations: [
    mdx(),
    sitemap(),
    astroIcon(),   // ⬅️ reintrodotto
  ],
});
