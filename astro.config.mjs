import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración para despliegue en Vercel o Render
  output: 'static',
  build: {
    assets: 'assets',
  },
});
