// Import the glob loader
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cancion = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/cancionero" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  })
});

export const collections = { cancion };