import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        ignores: [
            'node_modules/**',
            'playwright-report/**',
            'allure-report/**',
            'allure-results/**',
            'test-results/**',
        ],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            globals: globals.node,
        },
    },
];
