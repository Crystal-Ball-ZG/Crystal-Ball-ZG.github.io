import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig)
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// build target to build folder
		adapter: static_adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			assets: '/seer',
			base: '/seer'
		}
	}
};

export default config;
