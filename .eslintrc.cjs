module.exports = {
  extends: ['@terenceodonoghue/react', 'plugin:mdx/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/__tests__/*', 'tests/*', 'vitest.config.ts'] },
    ],
  },
  settings: {
    'import/internal-regex': '^tests/',
    'mdx/code-blocks': true,
  },
};
