// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.buzzliminal.co.jp',
  integrations: [sitemap()],
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    css: {
      postcss: './postcss.config.mjs'
    }
  }
});