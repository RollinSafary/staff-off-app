import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  root: __dirname,
  publicDir: 'public',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@shared': path.resolve(__dirname, 'src/components/shared'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@packages/shared': path.resolve(__dirname, '../../packages/shared'),
    },
  },
});
