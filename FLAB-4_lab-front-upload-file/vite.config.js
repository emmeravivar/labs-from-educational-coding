import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Asegúrate de que Heroku servirá tu aplicación desde esta carpeta
    rollupOptions: {
      input: './index.html', // La entrada de tu aplicación
    },
  },
  server: {
    port: process.env.PORT || 3001, // Configura el puerto para producción
    strictPort: true,
  },
});
