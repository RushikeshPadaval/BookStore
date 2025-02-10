import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Use the React plugin
  build: {
    outDir: 'dist', // Output directory for the build files
  },
});