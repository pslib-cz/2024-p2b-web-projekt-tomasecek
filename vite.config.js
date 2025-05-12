import { defineConfig } from 'vite';
import vituum from 'vituum';

export default defineConfig({
  base: '/2024-p2b-web-projekt-tomasecek/', // Nastav základní cestu pro GitHub Pages
  plugins: [
    vituum({
      pages: {
        normalizeBasePath: true,
      },
      imports: {
        paths: ['./src/styles/*/**', './src/scripts/*/**'],
      },
    }),
  ],
});
