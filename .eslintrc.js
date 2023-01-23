module.exports = {
  extends: ['@terenceodonoghue/react', 'plugin:mdx/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/tests/**', 'vitest.config.ts'],
      },
    ],
  },
  settings: {
    'mdx/code-blocks': true,
  },
};
