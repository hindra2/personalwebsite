// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://hindra2.github.io",
    integrations: [react()],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: { theme: "github-light" },
    },
});
