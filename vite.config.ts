import {defineConfig} from 'vite'
import {qwikVite} from '@builder.io/qwik/optimizer'
import {qwikCity} from '@builder.io/qwik-city/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import {vanillaExtractPlugin} from 'qwik-styled-ve/vite'

export default defineConfig(() => {
	return {
		plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin()],
	}
})
