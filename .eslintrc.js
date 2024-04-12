const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    'plugin:tailwindcss/recommended',
    'plugin:react-hooks/recommended',

  ],
  plugins: ['tailwindcss', 'react-hooks'],
  rules: {
    'import/no-named-as-default': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'import/no-default-export': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
}
