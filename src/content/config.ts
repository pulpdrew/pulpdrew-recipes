import { z, defineCollection } from 'astro:content';

const recipesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        time: z.string().optional(),
        imageUrl: z.string().optional(),
        letter: z.string().optional(),
    }),
  });

export const collections = {
  'recipes': recipesCollection,
};