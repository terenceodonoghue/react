import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Radio from '../Radio.js';

describe('Radio', () => {
  describe('with label', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(<Radio label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('radio')).toHaveAccessibleName('Label');
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Radio label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });
  });
});
