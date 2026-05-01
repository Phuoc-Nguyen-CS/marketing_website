import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        category: z.enum(['Social Media', 'Video Production', 'Multimedia', 'Editing']),
        thumbnail: z.string(),
        order: z.number(),
    }),
});

export const collections = { projects };