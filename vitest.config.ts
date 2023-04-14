import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['./**/index.test.ts'],
		exclude: ['node_modules/'],
	},
})