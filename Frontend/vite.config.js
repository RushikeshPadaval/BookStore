// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()], // Use the React plugin
//   build: {
//     outDir: 'dist', // Output directory for the build files
    
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      "/api": {
        target: "https://your-backend.onrender.com", // Replace with your Render backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
