import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      tests: path.resolve(__dirname, './tests'),
    },
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
