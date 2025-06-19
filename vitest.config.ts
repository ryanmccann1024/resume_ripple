import { defineConfig } from 'vitest/config';

export default defineConfig({
  // defaults for all projects
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['dist/**', '**/*.stories.*'],
    },
  },

  // one project per workspace
  projects: [
    {
      // core-logic ─────────────────────────────────────────
      root: 'packages/core-logic',
      test: {
        name: 'core-logic',
        environment: 'node',
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      // prompts ────────────────────────────────────────────
      root: 'packages/prompts',
      test: {
        name: 'prompts',
        environment: 'node',
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      // ui-kit (browser) ───────────────────────────────────
      root: 'packages/ui-kit',
      test: {
        name: 'ui-kit',
        environment: 'jsdom',
        setupFiles: ['test/setup.ts'],
        include: ['src/**/*.test.{ts,tsx}'],
      },
    },
    {
      // web (browser) ──────────────────────────────────────
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
