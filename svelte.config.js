import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte"],
    kit: {
        adapter: adapter({
            runtime: "edge",
        }),
    },
    preprocess: vitePreprocess(),

};

export default config;
