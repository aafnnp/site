module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@next/next/no-img-element': 'off'
  }
}
