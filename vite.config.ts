/// <reference types="vitest" />

import {defineConfig} from 'vite'
import {configDefaults} from 'vitest/config'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), basicSsl()],
    server: {
        open: true,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'setupTests.ts',
        coverage: {
            exclude: [
                ...configDefaults.exclude,
                '.eslintrc.cjs',
                'codegen.ts',
                'postcss.config.js',
                'tailwind.config.js',
                'src/vite-env.d.ts',
                '**/*.test.tsx',
                'src/OrderContextEnum.tsx',
                'src/main.tsx',
                'src/urqlClient.tsx',
                'src/authStore.tsx',
            ],
            enabled: true,
            reporter: ['html'],
        },
    },
})
