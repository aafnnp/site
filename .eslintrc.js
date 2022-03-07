module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
