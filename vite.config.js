import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory
    sourcemap: false, // Disable sourcemaps for production
    minify: true, // Enable minification for production
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
      },
    },
  },
});