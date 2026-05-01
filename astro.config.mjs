import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ['pub-ef51961f3a6140109196ab2cbe140139.r2.dev'], 
  },
});