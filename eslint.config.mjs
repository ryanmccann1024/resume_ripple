import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').FlatConfig[]} */
export default [
    /* ── Base JS rules ─────────────────────────────────────────────── */
    js.configs.recommended,

    /* ── Type-checked TS / TSX in src & test folders ──────────────── */
    {
        files: [
            'apps/*/src/**/*.{ts,tsx}',
            'packages/*/src/**/*.{ts,tsx}',
            'apps/*/test/**/*.{ts,tsx}',
            'packages/*/test/**/*.{ts,tsx}',
        ],
        env: { browser: true, node: true },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.eslint.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: { '@typescript-eslint': tseslint.plugin },
        rules: {
            ...tseslint.configs.recommendedTypeChecked.rules,
        },
    },

    /* ── React tweaks ──────────────────────────────────────────────── */
    {
        plugins: { react },
        settings: { react: { version: 'detect' } },
        rules: {
            'react/jsx-uses-react': 'off',       // React 17+
            'react/react-in-jsx-scope': 'off',   // React 17+
        },
    },

    /* ── Config / build files – parsed as untyped JS/TS ───────────── */
    {
        files: [
            '**/*.config.{js,ts,mjs,cjs}', // vite.config.ts, tsup.config.ts, etc.
            'vitest.config.ts',
            'tailwind.config.js',
            'eslint.config.*',
        ],
        languageOptions: {
            parserOptions: { project: null }, // ⬅ disable typed-linting
        },
    },

    /* ── Prettier (always last) ───────────────────────────────────── */
    prettier,
];
