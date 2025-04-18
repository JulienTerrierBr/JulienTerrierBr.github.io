// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://julienterrierbr.github.io',
  outDir: './dist',
  integrations: [react()],
  output: "static",
});