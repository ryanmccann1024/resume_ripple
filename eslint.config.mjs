// eslint.config.mjs
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import imp from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';

export default [

    /* ---------- base JS / TS ---------- */
    {
        files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],

        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/.turbo/**',
            '**/.next/**'
        ],

        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: [
                    './tsconfig.json',
                    './apps/*/tsconfig.json',
                    './packages/*/tsconfig.json'
                ],
                tsconfigRootDir: import.meta.dirname,
                sourceType: 'module',
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true}
            }
        },

        settings: {react: {version: 'detect'}},

        plugins: {
            '@typescript-eslint': tsPlugin,
            react,
            'react-hooks': reactHooks,
            import: imp,
            'jsx-a11y': jsxA11y,
            prettier: prettierPlugin
        },

        rules: {
            /* --- core style --- */
            ...js.configs.recommended.rules,
            'prettier/prettier': 'error',

            /* --- TypeScript --- */
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error'],

            /* --- React / hooks --- */
            'react/jsx-uses-react': 'off',   // handled by new JSX transform
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            /* --- Imports --- */
            'import/first': 'error',
            'import/order': ['warn', {'newlines-between': 'always'}],

            /* tweak freely… */
        }
    },

    /* ---------- test files ---------- */
    {
        files: ['**/*.{spec,test}.{ts,tsx,js,jsx}'],
        env: {jest: true, node: true},
        rules: {
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
];
