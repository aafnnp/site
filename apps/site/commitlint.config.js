module.exports = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint'
}
