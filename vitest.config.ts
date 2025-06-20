// 🔧 Vitest config for running fast, type-safe tests on React + TypeScript components.
// Uses jsdom to simulate a browser-like environment for UI testing.

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['dist/**', '**/*.stories.*'],
    },
  },

  projects: [
    {
      root: 'packages/core-logic',
      test: {
        name: 'core-logic',
        environment: 'node',
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      root: 'packages/prompts',
      test: {
        name: 'prompts',
        environment: 'node',
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      root: 'packages/ui-kit',
      test: {
        name: 'ui-kit',
        environment: 'jsdom',
        setupFiles: ['test/setup.ts'],
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      root: 'apps/web',
      test: {
        name: 'web',
        environment: 'jsdom',
        setupFiles: ['test/setup.ts'],
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
  ],
});
