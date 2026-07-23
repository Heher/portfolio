import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  environments: {
    ssr: {
      build: {
        rollupOptions: {
          input: './server/app.ts',
          external: ['pg', 'drizzle-orm/node-postgres'], // Exclude node dependencies
        },
      },
    },
  },
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    // Mark packages that can't be externalized
    noExternal: [],
  },
});
