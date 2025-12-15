// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, sharpImageService } from 'astro/config';

export default defineConfig({
	site: 'https://korvemaa.dev',
	trailingSlash: 'ignore',
	integrations: [mdx(), sitemap()],
	output: 'static'
});
