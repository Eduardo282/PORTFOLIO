import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    fechaCreacion: z.string(),
  }),
});

export const collections = { projects };
