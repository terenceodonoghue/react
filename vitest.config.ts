import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@tests': path.resolve(__dirname, './tests'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'verbose',
    setupFiles: './tests/setup.ts',
  },
});
