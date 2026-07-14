// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://coldforge.me',
  redirects: {
    '/papers': '/research',
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({ include: { lucide: ['*'] } }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: { noExternal: ['astro-icon'] },
  },
});
