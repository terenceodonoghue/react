import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Button from '../Button.js';

describe('Button', () => {
  describe('with inner text', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(<Button>Button Text</Button>, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleName('Button Text');
    });
  });

  describe('with variant', () => {
    it('has primary style', () => {
      // Arrange
      const { screen } = render(<Button variant="primary" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: defaultTheme.color.primary,
        color: 'white',
      });
    });

    it('has outline style', () => {
      // Arrange
      const { screen } = render(<Button variant="outline" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: rgba(
          defaultTheme.color.primary,
          defaultTheme.color.tonalOffset,
        ),
        color: defaultTheme.color.primary,
      });
    });

    it('has minimal style', () => {
      // Arrange
      const { screen } = render(<Button variant="minimal" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: 'none',
        color: defaultTheme.color.primary,
      });
    });
  });
});
