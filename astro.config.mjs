import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['pub-your-id.r2.dev'], 
  },

  adapter: cloudflare(),
});