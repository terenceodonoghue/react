module.exports = {
  extends: ['@terenceodonoghue/react', 'plugin:mdx/recommended'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['tests/*', '**/*.spec.ts*', 'vitest.config.ts'] },
    ],
  },
  settings: {
    'import/internal-regex': '^tests/',
    'mdx/code-blocks': true,
  },
};
