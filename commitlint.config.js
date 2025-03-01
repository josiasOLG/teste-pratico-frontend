module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [
      2,
      'always',
      /^\[CARD-[A-Z0-9]+\]: (feat|fix|docs|style|refactor|test|chore): .{1,72}$/,
    ],
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'],
    ],
  },
};
