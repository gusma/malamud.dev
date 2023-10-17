import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkModifiedTime } from './src/helpers/remark-modified-time.mjs';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "static",
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});