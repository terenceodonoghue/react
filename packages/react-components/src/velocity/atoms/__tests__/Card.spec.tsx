import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Card from '../Card.js';

describe('Card', () => {
  describe('with content', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Card>Content</Card>, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Content')).toBeVisible();
    });
  });

  describe('with heading', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(<Card heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('region')).toHaveAccessibleName('Heading');
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Card heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Heading')).toBeVisible();
    });
  });
});
