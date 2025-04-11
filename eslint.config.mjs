// @ts-check

import eslint from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import pluginStylisticTs from '@stylistic/eslint-plugin-ts'
import configPrettier from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { name: 'react/recommended', ...pluginReact.configs.flat.recommended },
  { name: 'react/jsx-runtime', ...pluginReact.configs.flat['jsx-runtime'] },
  pluginReactHooks.configs['recommended-latest'],
  pluginJsxA11y.flatConfigs.recommended,
  pluginNext.flatConfig.coreWebVitals,
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginImport.flatConfigs.recommended,
  { name: 'import/typescript', ...pluginImport.flatConfigs.typescript },
  { name: 'eslint-config-prettier', ...configPrettier },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: { project: import.meta.dirname },
      },
    },
  },
  {
    name: 'sugtao4423/basic',
    rules: {
      'capitalized-comments': ['error', 'always'],
      curly: ['error', 'multi-line', 'consistent'],
      'no-param-reassign': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/router',
              message: "Please use 'next/navigation' instead.",
            },
          ],
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
  {
    name: 'sugtao4423/@stylistic',
    plugins: { '@stylistic/ts': pluginStylisticTs },
    rules: {
      '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/ts/lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          allowBlockStart: true,
        },
      ],
    },
  },
  {
    name: 'sugtao4423/@typescript-eslint',
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowIIFEs: true },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { overrides: { constructors: 'no-public' } },
      ],
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true },
      ],
    },
  },
  {
    name: 'sugtao4423/react',
    rules: {
      'react/function-component-definition': [
        'error',
        { namedComponents: ['function-declaration', 'arrow-function'] },
      ],
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-props-no-spreading': ['error', { html: 'ignore' }],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: ['key'],
        },
      ],
    },
  },
  {
    name: 'sugtao4423/import',
    plugins: { 'unused-imports': pluginUnusedImports },
    rules: {
      'import/no-default-export': 'error',
      'import/newline-after-import': ['error', { considerComments: true }],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern:
                '{react,react-dom/**,react-router-dom,next,next/**,@next/**}',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '{./**,**/*.{css,scss,sass}}',
              group: 'sibling',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          'newlines-between': 'always',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    name: 'sugtao4423/ignore',
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/prefer-literal-enum-member': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'jsx-a11y/no-autofocus': 'off',
    },
  },
  {
    name: 'sugtao4423/ignore-tsx',
    files: ['**/*.tsx'],
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    name: 'sugtao4423/ignore-default-export',
    files: [
      'next.config.ts',
      '**/{app,pages}/**/{index,head,template,layout,page,\\[*\\],loading,error,not-found}.{js,jsx,ts,tsx}',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  }
)
