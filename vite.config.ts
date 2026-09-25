import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },

  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },

  preview: {
    allowedHosts: [
      'frontendzorvenn-2.onrender.com',
      'zorvenn.com',
      'www.zorvenn.com',
    ],
  },
});