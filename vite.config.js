import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base: '/sean5505/bikeSwoonRestaurantWebsite',
    build: {
      outDir: 'build',
     
    },
    commonjsOptions: {
      esmExternals: true 
   },
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        css: true,
      },
  };
});