import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // relative paths so the site works under any subpath (GitHub Pages, alvinahu.com, etc.)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});