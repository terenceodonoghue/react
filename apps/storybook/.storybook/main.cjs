const react = require('@vitejs/plugin-react');
const path = require('node:path');
const { mergeConfig } = require('vite');

module.exports = {
  features: {
    emotionAlias: false,
  },
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
  viteFinal: (config) =>
    mergeConfig(config, {
      esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
      },
      resolve: {
        alias: {
          '@terenceodonoghue/react-components/labs': path.resolve(
            __dirname,
            '../../../packages/react-components/src/labs',
          ),
          '@terenceodonoghue/react-components/velocity': path.resolve(
            __dirname,
            '../../../packages/react-components/src/velocity',
          ),
          '@terenceodonoghue/react-components/velocity.css': path.resolve(
            __dirname,
            '../../../packages/react-components/src/velocity/index.css',
          ),
          '@terenceodonoghue/react-hooks': path.resolve(
            __dirname,
            '../../../packages/react-hooks/src',
          ),
        },
      },
    }),
};
