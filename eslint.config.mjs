// eslint.config.mjs
// 🧠 ESLint Flat Config for ResumeRipple
// • Uses type-aware linting for *.ts / *.tsx via tsconfig.eslint.json
// • Completely ignores build / tooling configs that don’t need TS rules
// • Falls back to JS-only rules for normal *.js files

import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  /* -------------------------------------------------
   * 1️⃣  Ignore build / tooling configs altogether
   * ------------------------------------------------- */
  {
    ignores: [
      '**/postcss.config.js',
      '**/tailwind.config.js',
      '**/vite.config.ts',
      'husky-test.js',
    ],
  },

  /* -------------------------------------------------
   * 2️⃣  Base JavaScript rules
   * ------------------------------------------------- */
  js.configs.recommended,

  /* -------------------------------------------------
   * 3️⃣  TypeScript rules (syntax only, no types)
   * ------------------------------------------------- */
  ...tseslint.configs.recommended,

  /* -------------------------------------------------
   * 4️⃣  TypeScript rules WITH type-checking
   * ------------------------------------------------- */
  ...tseslint.configs.recommendedTypeChecked,

  /* -------------------------------------------------
   * 5️⃣  Apply project awareness only to TS / TSX files
   * ------------------------------------------------- */
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
