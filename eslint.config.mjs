// eslint.config.mjs – flat-config style --------------------------------------
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
    /* ------------------------------------------------- *
     * 0. Ignore everything we never want to lint
     * ------------------------------------------------- */
    {
        ignores: [
            /** tooling & vendor */
            'node_modules',
            '.husky',
            '.turbo',
            /** build output */
            'dist',
            'apps/*/dist',
            'packages/*/dist'
        ]
    },

    /* ------------------------------------------------- *
     * 1. TypeScript / TSX source
     * ------------------------------------------------- */
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.eslint.json'],   // <── the new file
                tsconfigRootDir: import.meta.dirname,
                sourceType: 'module',
                ecmaVersion: 'latest'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: reactPlugin,
            'react-hooks': reactHooks
        },
        settings: {react: {version: 'detect'}},

        rules: {
            /* example rules – tweak to taste */
            'react/jsx-no-target-blank': 'error',
            '@typescript-eslint/consistent-type-imports': 'warn'
        }
    },

    /* ------------------------------------------------- *
     * 2. Plain JavaScript / config files
     * ------------------------------------------------- */
    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        languageOptions: {ecmaVersion: 'latest', sourceType: 'module'},
        rules: {
            // generic JS rules go here
        }
    }
];
