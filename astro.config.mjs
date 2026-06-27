import { defineConfig } from 'astro/config';

// Saída estática para Cloudflare Pages. Sem deploy neste ciclo.
export default defineConfig({
  site: 'https://kassiobraga.com.br',
  output: 'static',
  trailingSlash: 'ignore',
});
