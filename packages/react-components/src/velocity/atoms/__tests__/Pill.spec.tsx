import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Pill from '../Pill.js';

describe('Pill', () => {
  it('has default style', () => {
    // Arrange
    const { screen } = render(<Pill label={1} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveStyle({
      backgroundColor: rgba(defaultTheme.color.primary, 0.2),
    });
  });

  describe('has background', () => {
    test('with color', () => {
      // Arrange
      const { screen } = render(<Pill label={1} color="blue" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        backgroundColor: rgba('blue', 0.2),
      });
    });

    test('with opacity', () => {
      // Arrange
      const { screen } = render(<Pill label={1} opacity={0.5} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        backgroundColor: rgba(defaultTheme.color.primary, 0.5),
      });
    });
  });

  describe('with label', () => {
    it('has visible status', () => {
      // Arrange
      const { screen } = render(<Pill label={1} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toBeVisible();
      expect(screen.getByRole('status')).toHaveTextContent('1');
    });
  });
});
