import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Main from '../Main.js';

describe('Main', () => {
  describe('with heading', () => {
    it('has accessible elements', () => {
      // Arrange
      const { screen } = render(<Main heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('main')).toHaveAccessibleName('Heading');
      expect(screen.getByRole('heading')).toHaveAccessibleName('Heading');
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Main heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('heading')).toBeVisible();
      expect(screen.getByRole('heading')).toHaveTextContent('Heading');
    });
  });
});
