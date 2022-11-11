import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';
const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@lib': path.resolve('./src/lib/'),
			'@components': path.resolve('./src/components/'),
			'@styles': path.resolve('./src/styles/')
		}
	}
};

export default config;
