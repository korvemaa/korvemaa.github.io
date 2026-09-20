import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const project = defineCollection({
	loader: glob({ base: './src/content/project', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		group: z.string(),
		fileName: z.string().optional(),
		description: z.string().optional(),
		blurb: z.string().optional(),
		date: z.coerce.date().optional(),
		thumbnail: image().optional(), // Shown in the projects panel. should be 1:1
		gallery: z.array(image()).optional(), // hq images showed as a slideshow in the page
		videos: z.array(z.string()).optional(), // YouTube videos to show below the gallery in groups of two
		links: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		job: z.string().optional(),
	})
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		name: z.string(),
		employment: z.string(),
		position: z.string(),
		location: z.string(),
		projects: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		thumbnail: image().optional(), // Shown in the projects panel. should be 16/9 roughly
		featured: z.array(z.string()).optional()
	})
});

export const collections = { project, experience };
