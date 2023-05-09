import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Card from '../Card.js';

describe('Card', () => {
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
      expect(screen.getByRole('heading')).toBeVisible();
      expect(screen.getByRole('heading')).toHaveTextContent('Heading');
    });
  });
});
