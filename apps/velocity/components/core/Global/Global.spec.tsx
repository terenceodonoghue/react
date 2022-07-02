/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import { em } from 'polished';
import React from 'react';
import ThemeProvider, { defaultTheme } from '~/components/core/ThemeProvider';
import Global from './Global';

jest.mock('normalize.css');

describe('Global', () => {
  it('provides global styles', () => {
    const href = faker.internet.url();

    const { getByTestId } = render(
      <html data-testid="html" lang="en">
        <ThemeProvider>
          <Global />
          <body data-testid="body">
            <main data-testid="main">
              <h1 data-testid="h1">Heading 1</h1>
              <a data-testid="link" href={href}>
                Link
              </a>
            </main>
          </body>
        </ThemeProvider>
      </html>,
    );

    expect(getByTestId('html')).toHaveStyle({
      boxSizing: 'border-box',
      fontSize: em(defaultTheme.typography.fontSize),
    });
    expect(getByTestId('body')).toHaveStyle({
      backgroundColor: defaultTheme.palette.neutral[100],
      boxSizing: 'border-box',
    });
    expect(getByTestId('main')).toHaveStyle({
      boxSizing: 'border-box',
      marginLeft: 80,
    });
    expect(getByTestId('h1')).toHaveStyle({
      boxSizing: 'border-box',
      fontSize: em(28, defaultTheme.typography.fontSize),
    });
  });
});
