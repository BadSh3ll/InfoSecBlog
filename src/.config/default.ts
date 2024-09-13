import type { Config } from "~/types";

export const configDefault: Config = {
	title: "InfoSec Blog",
	author: "Thanh Nguyen",
	desc: "Rediscory the beauty of typography",
	website: "https://badsh3ll.github.io",
	locale: "en-us",
	themeStyle: "light",
	socials: [
		{
			name: "github",
			href: "https://github.com/BadSh3ll",
		},
		{
			name: "linkedin",
			href: "https://www.linkedin.com/in/thanh04082002/",
		},
	],
	header: {
		twitter: "@moeyua13",
	},
	navs: [
		{
			name: "Posts",
			href: "/InfoSecBlog/posts/page/1",
		},
		{
			name: "Archive",
			href: "/InfoSecBlog/archive",
		},
		{
			name: "Categories",
			href: "/InfoSecBlog/categories",
		},
		{
			name: "About",
			href: "/InfoSecBlog/about",
		},
	],
	category_map: [{ name: "胡适", path: "hu-shi" }],
	comments: {
		giscus: {
			repo: "BadSh3ll/InfoSecBlog",
			repoId: "R_kgDOMxVGmA=",
			category: "General",
			categoryId: "DIC_kwDOMxVGmM4CidFt",
			mapping: "pathname",
			theme: "light",
			reactionsEnabled: "1",
			strict: "0",
			emitMetadata: "0",
			inputPosition: "bottom",
			lang: "en",
			loading: "lazy",
		},
	},
};
