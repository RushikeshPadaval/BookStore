import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BookStore/', // Ensure this matches your repo name
  build: {
    outDir: 'dist',
  },
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()',
    },
  },
});
