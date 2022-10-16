import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { sveltekitSocketIo } from './custom-plugins/sveltekitSocketIo';

const config: UserConfig = {
	plugins: [sveltekit(), sveltekitSocketIo()]
};

export default config;
