// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // El sitio se sube como HTML estático a public_html; el único endpoint
  // dinámico es el PHP del formulario.
  output: 'static',
  build: {
    // Sin guion bajo: algunos cPanel/Apache bloquean carpetas que empiezan con "_".
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
