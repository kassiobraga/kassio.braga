import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.date(),
    tag: z.string(),
    capa: z.string().optional(),
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { blog };
