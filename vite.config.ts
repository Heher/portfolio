import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
