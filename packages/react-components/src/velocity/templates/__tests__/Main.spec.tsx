import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Main from '../Main.js';

describe('Main', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<Main heading="Heading" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('main')).toHaveAccessibleName('Heading');
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Main heading="Heading">Content</Main>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Heading')).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });
});
