/// <reference types="vitest" />
/// <reference types="vite/client" />

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/shared/misc/setupTests.ts'],
  },
  base: '/nostra-frontend/',
});
