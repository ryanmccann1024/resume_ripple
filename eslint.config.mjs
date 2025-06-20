// eslint.config.mjs
// 🧹 Flat ESLint config using modern ESM (.mjs) format.
// Controls lint rules and plugins across the monorepo using TypeScript + React.
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
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
        files: ['**/*.{js,jsx,ts,tsx}'],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ['./tsconfig.eslint.json'],
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            '@typescript-eslint': tsPlugin,
            react,
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
        },

        settings: {
            react: {version: 'detect'},
        },

        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],

            'react/jsx-uses-react': 'off',          // not needed with React ≥17
            'react/react-in-jsx-scope': 'off',      // not needed with React ≥17
            'react/jsx-uses-vars': 'error',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'unused-imports/no-unused-imports': 'warn',

            eqeqeq: ['error', 'smart'],
            'no-console': ['warn', {allow: ['warn', 'error']}],
        },
    }, ...storybook.configs["flat/recommended"]];
