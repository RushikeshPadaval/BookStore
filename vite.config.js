import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BookStore/', // 🔥 Important: Must match your repo name!
  build: {
    outDir: 'dist',
  },
});
// createf for gh-pages base and build was added