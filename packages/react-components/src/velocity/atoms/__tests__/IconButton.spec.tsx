import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import IconButton from '../IconButton.js';

describe('IconButton', () => {
  describe('with variant', () => {
    it('has rounded style', () => {
      // Arrange
      const { screen } = render(<IconButton variant="rounded" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        borderRadius: '50%',
      });
    });

    it('has squared style', () => {
      // Arrange
      const { screen } = render(<IconButton variant="squared" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        borderRadius: '4px',
      });
    });
  });
});
