// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import markdownRemix from './markdown-remix'

export default defineConfig({
	site: 'https://korvemaa.dev',
	trailingSlash: 'ignore',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [markdownRemix]
	},
	output: 'static'
});
