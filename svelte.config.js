import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    extensions: [".svelte"],
    kit: {
        adapter: adapter(),
    },
    preprocess: [vitePreprocess()],
};

export default config;
