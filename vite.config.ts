import { defineConfig, splitVendorChunkPlugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh(), splitVendorChunkPlugin()],
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        open: true,
        proxy: {
            '/api': `http://localhost:${process.env.SERVER_PORT}`,
        },
    },
});
