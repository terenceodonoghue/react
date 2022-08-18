import { ThemeProvider as EmotionProvider, Theme } from '@emotion/react';
import merge from 'lodash/merge';
import { FunctionComponent, ReactNode } from 'react';

export const defaultTheme: Theme = {
  color: {
    primary: '#2e5bff',
    secondary: '#8c54ff',
    neutral: {
      50: '#fff',
      100: '#f4f6fc',
      200: '#eef3f5',
      300: '#e4e8f0',
      400: '#bfc5d2',
      500: '#b0bac9',
      600: '#8798ad',
      700: '#8097b1',
      800: '#69707f',
      900: '#2e384d',
    },
    ui: {
      blue: '#2e5bff',
      green: '#33ac2e',
      purple: '#8c54ff',
      red: '#d63649',
      teal: '#00c1d4',
      yellow: '#f7c137',
    },
    tonalOffset: 0.2,
  },
  font: {
    family: 'Rubik, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
    },
  },
  transition: {
    quickly: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slowly: '300ms cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  theme,
  ...props
}) => (
  <EmotionProvider
    theme={theme ? merge(defaultTheme, theme) : defaultTheme}
    {...props}
  />
);

export default ThemeProvider;
