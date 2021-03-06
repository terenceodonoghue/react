/* eslint-disable import/no-extraneous-dependencies */
import { FunctionComponent, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import ThemeProvider, { ThemeProviderProps } from '../core/ThemeProvider';

const Provider: FunctionComponent<ThemeProviderProps> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: Provider, ...options });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
