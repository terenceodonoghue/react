import { create } from '@storybook/theming';

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
    appBg: 'white',
    brandImage: '/logo.svg',
    brandTitle: 'React',
    brandUrl: 'https://github.com/terenceodonoghue/react',
  }),
  preview: create({
    ...base,
    appBorderColor: '#D1D1D1',
    appBorderRadius: 4,
  }),
};

export default themes;
