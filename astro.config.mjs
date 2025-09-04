// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.buzzliminal.co.jp',
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.mjs'
    }
  }
});