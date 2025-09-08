// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.buzzliminal.co.jp',
  integrations: [sitemap()],
  // Xserverは静的ホスティングなのでアダプター不要
  vite: {
    css: {
      postcss: './postcss.config.mjs'
    }
  }
});