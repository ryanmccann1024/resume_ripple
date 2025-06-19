// eslint.config.mjs  – root of the monorepo
import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // 1) Base JS rules
    js.configs.recommended,

    // 2) Our shared rules for everything in the repo
    {
        /* globs evaluated from repo root */
        files: ['**/*.{js,jsx,ts,tsx}'],
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
                ecmaVersion: 'latest'
            }
        },
        settings: {react: {version: 'detect'}},
        plugins: {
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': reactHooks,
            import: importPlugin
        },
        rules: {
            //----------------------------------------------------------------------
            // TypeScript – start from the plugin’s recommended/strict sets
            //----------------------------------------------------------------------
            ...tsPlugin.configs['recommended-type-checked'].rules,
            ...tsPlugin.configs['stylistic-type-checked'].rules,

            //----------------------------------------------------------------------
            // React
            //----------------------------------------------------------------------
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            //----------------------------------------------------------------------
            // Imports (basic sanity checks)
            //----------------------------------------------------------------------
            ...importPlugin.configs.recommended.rules,

            //----------------------------------------------------------------------
            // Our tweaks
            //----------------------------------------------------------------------
            'react/jsx-no-target-blank': ['error', {enforceDynamicLinks: 'always'}],
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index']
                    ],
                    'newlines-between': 'always'
                }
            ]
        }
    },

    // 3) Prettier – turns off all rules that clash with formatting
    prettier
]
