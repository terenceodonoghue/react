module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/__tests__/*'] },
    ],
  },
};
