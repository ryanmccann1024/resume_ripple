import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
      provider: 'v8',
    },
  },
  // tell Vitest each workspace is its own “project”
  projects: [
    {
      test: {
        name: 'core-logic',
        environment: 'node',
        include: ['packages/core-logic/src/**/*.test.{ts,tsx}'],
      },
    },
    {
      test: {
        name: 'prompts',
        environment: 'node',
        include: ['packages/prompts/src/**/*.test.{ts,tsx}'],
      },
    },
    {
      test: {
        name: 'ui-kit',
        environment: 'jsdom',
        setupFiles: ['packages/ui-kit/test/setup.ts'],
        include: ['packages/ui-kit/src/**/*.test.{ts,tsx}'],
      },
    },
    {
      test: {
        name: 'web',
        environment: 'jsdom',
        setupFiles: ['apps/web/test/setup.ts'],
        include: ['apps/web/src/**/*.test.{ts,tsx}'],
      },
    },
  ],
});
