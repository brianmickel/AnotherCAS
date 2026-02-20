import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs'],
  sourcemap: true,
  outDir: 'dist',
});
