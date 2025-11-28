import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			image: image().optional(),
			tags: z.array(z.string()).optional()
		}),
});

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		group: z.string(),
		description: z.string().optional(),
		date: z.coerce.date().optional(),
		thumbnail: image().optional(), // Shown in the projects panel. should be 1:1
		gallery: z.array(image()).optional(), // hq images showed as a slideshow in the page
		youtubeVideos: z.array(z.string()).optional(), // YouTube videos to show below the gallery in groups of two
		links: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional()

	})
})

export const collections = { blog, project };
