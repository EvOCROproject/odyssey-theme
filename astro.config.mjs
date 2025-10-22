import { defineConfig } from 'astro/config';
// Se nel progetto hai Lit, tieni pure l'integrazione; se non serve, puoi toglierla.
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://EvOCROproject.github.io/odyssey-theme/',
  base: '/odyssey-theme/',
  outDir: './docs',
  integrations: [lit()],
});
