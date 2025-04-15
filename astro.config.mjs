// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://julienterrierbr.github.io',
  integrations: [react()],
  output: "static",
  build: {
    outDir: "./dist",
  },
});