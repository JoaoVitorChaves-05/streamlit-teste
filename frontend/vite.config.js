import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build', // Garante que os arquivos vão para o backend
    emptyOutDir: true
  },
});