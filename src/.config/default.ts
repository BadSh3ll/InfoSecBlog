import type { Config } from "~/types";

export const configDefault: Config = {
	title: "InfoSec Blog",
	author: "Thanh Nguyen",
	desc: "Rediscory the beauty of typography",
	website: "https://astro-theme-typography.vercel.app/",
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
			href: "/posts/page/1",
		},
		{
			name: "Archive",
			href: "/archive",
		},
		{
			name: "Categories",
			href: "/categories",
		},
		{
			name: "About",
			href: "/about",
		},
	],
	category_map: [{ name: "胡适", path: "hu-shi" }],
	comments: {
		giscus: {
			repo: "BadSh3ll/InfoSec-Blog",
			repoId: "MDEwOlJlcG9zaXRvcnkzNjQ2NzIzNzE=",
			category: "Comments",
			mapping: "pathname",
			theme: "light",
			reactionsEnabled: "1",
			strict: "1",
			emitMetadata: "0",
			inputPosition: "top",
			lang: "en",
			loading: "lazy",
		},
	},
};
