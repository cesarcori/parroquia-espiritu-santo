// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cesarcori.github.io',
  base: '/parroquia-espiritu-santo',
  vite: {
    plugins: [tailwindcss()],
  },
});
