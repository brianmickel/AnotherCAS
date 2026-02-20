import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    // Only include the top-level test driver; individual *.test.ts files
    // are helper modules that export functions, not standalone test suites.
    include: ['src/index.test.ts'],
  },
});
