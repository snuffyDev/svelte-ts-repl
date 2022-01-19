import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: { renderSync: true },
	}),

	kit: {
		adapter: adapter(),

		target: '#svelte'
		, vite: {
			resolve: { alias: { $lib: path.resolve('./src/lib') } }

		}
	}
}
export default config;
