import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Deploys to Cloudflare Pages. Build output: .svelte-kit/cloudflare
		adapter: adapter()
	}
};

export default config;
