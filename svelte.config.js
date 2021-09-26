import adapter from '@sveltejs/adapter-static'
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter: adapter(),
    vite: {
      plugins: [
        WindiCSS.default()
      ]
    }
	}
};

export default config;
