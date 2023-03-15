import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Card from '../Card.js';

describe('Card', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<Card heading="Heading" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('region')).toHaveAccessibleName('Heading');
    expect(screen.getByRole('heading')).toHaveAccessibleName('Heading');
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Card heading="Heading">Content</Card>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Heading')).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });
});
