import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Saída estática para Cloudflare Pages (projeto kassio-braga).
export default defineConfig({
  site: 'https://kassiobraga.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
