import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Root directory
  publicDir: 'public', // Public folder for static assets
  build: {
    outDir: 'dist', // Output directory
  },
});