import { create } from '@storybook/theming';

const isProd = process.env.NODE_ENV === 'production';

const base = {
  base: 'light',
  colorSecondary: '#5D65F6',
  fontBase: '"Nunito Sans", sans-serif',
  fontCode: '"Source Code Pro", monospace',
  textColor: '#111010',
};

const themes = {
  manager: create({
    ...base,
    brandImage: isProd ? '/react-hooks/logo.svg' : '/logo.svg',
    brandTitle: 'React Hooks',
    brandUrl: 'https://github.com/terenceodonoghue/react-hooks',
  }),
  preview: create({
    ...base,
    appBorderColor: '#D1D1D1',
    appBorderRadius: 4,
  }),
};

export default themes;
