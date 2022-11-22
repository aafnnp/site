module.exports = {
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  bracketSpacing: false,
  trailingComma: 'none',
  importOrder: [
    '(^@|^[A-Za-z])(?!internals)(.*(?<!tyles)$)',
    '(^[.]|^@internals)(?!^[A-Za-z])(.*(?<!tyles)$)',
    'tyles'
  ],
  importOrderSeparation: true
}
