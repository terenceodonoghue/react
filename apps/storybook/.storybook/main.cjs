const path = require('node:path');

module.exports = {
  core: { builder: '@storybook/builder-vite' },
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  staticDirs: ['./public'],
  viteFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@terenceodonoghue/react-hooks': path.resolve(
        __dirname,
        '../../../packages/react-hooks/src',
      ),
    };

    return config;
  },
};
