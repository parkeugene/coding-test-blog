import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const proxy = {
  '/api': {
    target: 'https://us-west-2.aws.data.mongodb-api.com',
    changeOrigin: true,
    secure: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy,
  },
});
