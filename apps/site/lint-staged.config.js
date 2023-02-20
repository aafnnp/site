module.exports = {
  // Lint then format JavaScript files
  '**/*.(js|jsx)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`
}
