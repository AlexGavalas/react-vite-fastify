import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import 'dotenv/config';

export default defineConfig({
    plugins: [react()],
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
