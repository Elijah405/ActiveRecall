import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ActiveRecall/', // Ensure this matches the repository name
  build: {
    outDir: 'dist',
  },
});
