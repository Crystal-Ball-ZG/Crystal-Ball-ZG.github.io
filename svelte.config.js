import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import static_adapter from '@sveltejs/adapter-static';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig)],
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
			assets: '/Crystal-Ball-ZG.github.io',
			base: '/Crystal-Ball-ZG.github.io'
		},
		vite: {
			plugins: [
				// readme https://github.com/antfu/unocss
				Unocss({
					presets: [
						presetAttributify({
							/* preset options */
						}),
						presetUno()
						// ...custom presets
					],
					rules: [
						// custom rules if we want more inline classes outside of windicss
					]
				})
			]
		}
	}
};

export default config;
