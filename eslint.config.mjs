import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
    ...compat.config({
        extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
    }),
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        plugins: {
            '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
            react: (await import('eslint-plugin-react')).default,
            'react-refresh': (await import('eslint-plugin-react-refresh')).default,
            import: (await import('eslint-plugin-import')).default,
            'jsx-a11y': (await import('eslint-plugin-jsx-a11y')).default,
            prettier: (await import('eslint-config-prettier')).default,
        },
        languageOptions: {
            parser: (await import('@typescript-eslint/parser')).default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // Common rules
            indent: ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            // TypeScript rules
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-use-before-define': 'off',
            '@typescript-eslint/no-throw-literal': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/lines-between-class-members': 'off',

            // React rules
            'react/no-unused-prop-types': ['warn', { ignore: ['instanceType'] }],
            'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
            'react/jsx-boolean-value': ['error', 'always'],
            'react/destructuring-assignment': 'off',
            'react/function-component-definition': [
                'off',
                {
                    namedComponents: 'arrow-function',
                    unnamedComponents: 'arrow-function',
                },
            ],
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-props-no-spreading': 'off',
            'react/require-default-props': 'off',

            // Import rules
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: ['**/*.config.ts'],
                },
            ],
            'import/prefer-default-export': 'off',
            'import/no-unused-imports': 'off',
            'import/no-cycle': 'off',

            // A11y rules
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
        },
    },
    {
        ignores: ['.next', 'node_modules'],
    },
]

export default eslintConfig

// TODO install: npm install --legacy-peer-deps --save-dev eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-next eslint-config-prettier @eslint/eslintrc
