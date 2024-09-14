import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { config } from "./src/.config";

// https://astro.build/config
export default defineConfig({
	site: config.website,
	base: "InfoSecBlog",
	prefetch: true,
	markdown: {
		// shikiConfig: {
		// 	theme: "nord",
		// 	langs: [],
		// 	wrap: true,
		// },
		syntaxHighlight: false,
	},
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
		robotsTxt(),
		sitemap(),
		mdx(),
	],
});
