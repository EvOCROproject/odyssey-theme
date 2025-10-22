import { defineConfig } from 'astro/config';
// Se nel tuo progetto usi Lit (pare di sì), tieni l'integrazione:
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://EvOCROproject.github.io/odyssey-theme/',
  base: '/odyssey-theme/',
  integrations: [lit()],
});
