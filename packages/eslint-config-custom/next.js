const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: { project, ecmaVersion: 'latest', sourceType: 'module' },
  globals: { React: true, JSX: true },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: { extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/no-default-export': 'off',
    'no-console': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/no-namespace': ['error', { allowComputed: true }],
    camelcase: 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'es5',
        allowParens: 'avoid',
        printWidth: 100,
        semi: false,
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
  },
}
