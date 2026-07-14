import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    client: z.string().optional(),
    period: z.string(),
    stack: z.array(z.string()).default([]),
    outcome: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    heroImage: z.string().optional(),
  }),
});

const papers = defineCollection({
  loader: file('./src/content/papers.yaml'),
  schema: z.object({
    id: z.string(),
    type: z.enum(['paper', 'thesis']).default('paper'),
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    abstract: z.string().optional(),
    links: z
      .object({
        pdf: z.string().url().optional(),
        doi: z.string().url().optional(),
        scholar: z.string().url().optional(),
        repository: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const collections = { blog, projects, papers };
