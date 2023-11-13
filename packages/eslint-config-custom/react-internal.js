const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
  ].map(require.resolve),
  parserOptions: { project, ecmaVersion: 'latest', sourceType: 'module' },
  globals: { JSX: true },
  settings: {
    'import/resolver': {
      typescript: { project },
      node: { extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'] },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'import/no-default-export': 'off',
    'no-console': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-namespace': ['error', { allowComputed: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
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
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'import/order': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'react/display-name': 'off',
  },
}
