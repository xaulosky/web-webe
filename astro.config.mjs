// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // El sitio se sube como HTML estático a public_html; el único endpoint
  // dinámico es el PHP del formulario.
  output: 'static',
  // No hay pantalla de índice de marcas en el diseño: /marcas entra en la ficha
  // de la marca destacada. La redirección mantiene viva la URL corta.
  redirects: {
    '/marcas': '/marcas/novara',
  },
  build: {
    // Sin guion bajo: algunos cPanel/Apache bloquean carpetas que empiezan con "_".
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
