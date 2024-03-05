// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	modules: [
		"@pinia/nuxt",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"@hebilicious/vue-query-nuxt",
		"@nuxtjs/html-validator",
	],
});
