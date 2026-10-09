// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: [
          '**/*.mp4',
          '**/*.mov',
          '**/*.avi',
          '**/*.mkv',
          '**/*.webm',
          '**/src/assets/Testimony/**',
        ],
      },
    },
  },
});
