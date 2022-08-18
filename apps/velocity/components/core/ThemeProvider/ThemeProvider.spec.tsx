/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import ThemeProvider, { defaultTheme } from './ThemeProvider';

const Consumer = () => (
  <div
    css={(theme) => ({
      backgroundColor: theme.color.primary,
      color: theme.color.neutral[50],
    })}
    data-testid="consumer"
  />
);

describe('ThemeProvider', () => {
  it('provides a default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>,
    );

    expect(getByTestId('consumer')).toHaveStyle({
      backgroundColor: defaultTheme.color.primary,
      color: defaultTheme.color.neutral[50],
    });
  });

  it('provides a modified theme', () => {
    const { getByTestId } = render(
      <ThemeProvider
        theme={{
          color: {
            accent: defaultTheme.color.ui.green,
            neutral: { 50: defaultTheme.color.ui.purple },
          },
        }}
      >
        <Consumer />
      </ThemeProvider>,
    );

    expect(getByTestId('consumer')).toHaveStyle({
      backgroundColor: defaultTheme.color.ui.green,
      color: defaultTheme.color.ui.purple,
    });
  });
});
