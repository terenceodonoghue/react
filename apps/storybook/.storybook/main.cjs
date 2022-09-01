const react = require('@vitejs/plugin-react');
const path = require('node:path');
const { mergeConfig } = require('vite');

module.exports = {
  features: {
    emotionAlias: false,
  },
  core: { builder: '@storybook/builder-vite' },
  features: { previewMdx2: true },
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
    const mergedConfig = mergeConfig(config, {
      esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
      },
      resolve: {
        alias: {
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
    });

    return {
      ...mergedConfig,
      plugins: [
        // Filter out `vite:react-jsx` per suggestion in `plugin-react`...
        // "You should stop using "vite:react-jsx" since this plugin conflicts with it."
        // Implementation suggestion from: https://github.com/storybookjs/builder-vite/issues/113#issuecomment-940190931
        ...config.plugins.filter(
          (plugin) =>
            !(
              Array.isArray(plugin) &&
              plugin.some((p) => p.name === 'vite:react-jsx')
            ),
        ),
        react({ jsxImportSource: '@emotion/react' }),
      ],
    };
  },
};
