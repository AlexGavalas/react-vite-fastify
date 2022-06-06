import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    root: 'src',
    build: {
        outDir: '../dist',
    },
    server: {
        open: true,
        proxy: {
            '/api': `http://localhost:${process.env.SERVER_PORT}`,
        },
    },
});
