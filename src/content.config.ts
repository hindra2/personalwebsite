import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    // The filename becomes the slug: hello-world.md -> /blog/hello-world
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        // Not shown on the home page; only used as the post's meta description.
        summary: z.string().optional(),
    }),
});

const projects = defineCollection({
    // Same as blog: explorifyy.md -> /projects/explorifyy. An entry with no
    // body still lists on the home page, it just doesn't get a page.
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        desc: z.string(),
        // A range like "June 2026 - Present", shown as written.
        date: z.string(),
        location: z.string(),
        skills: z.array(z.string()),
        link: z.string().url().optional(),
        // `date` is free text, so the list order is spelled out instead.
        order: z.number(),
    }),
});

export const collections = { blog, projects };
