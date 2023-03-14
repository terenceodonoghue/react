import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Card from '../Card.js';

describe('Card', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<Card heading="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('region')).toHaveAccessibleName('Label');
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Card heading="Heading">Content</Card>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('Heading');
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
