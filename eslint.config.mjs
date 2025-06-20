// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.mjs
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [/* 1️⃣  Base ESLint recommended rules */
js.configs.recommended, /* 2️⃣  Our project-wide rules (JS + TS + React) */
{
    /* match every source / test file we care about */
    files: ['**/*.{js,jsx,ts,tsx}'],

    /* ── language / parsing ---------------------------------------------- */
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            project: ['./tsconfig.eslint.json'],
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        /* browser + node globals instead of the old “env” key */
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },

    /* ── plugin registrations -------------------------------------------- */
    plugins: {
        '@typescript-eslint': tsPlugin,
        react,
        'react-hooks': reactHooks,
        'unused-imports': unusedImports,
    },

    /* optional helper for eslint-plugin-react */
    settings: {
        react: { version: 'detect' },
    },

    /* ── actual rules ----------------------------------------------------- */
    rules: {
        /* --- TypeScript ---------------------------------------------------- */
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

        /* --- React --------------------------------------------------------- */
        'react/jsx-uses-react': 'off',          // not needed with React ≥17
        'react/react-in-jsx-scope': 'off',      // not needed with React ≥17
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        /* --- Imports / dead code ------------------------------------------ */
        'unused-imports/no-unused-imports': 'warn',

        /* --- Misc best-practices ------------------------------------------ */
        eqeqeq: ['error', 'smart'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
}, ...storybook.configs["flat/recommended"]];
