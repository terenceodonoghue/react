import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Pill from '../Pill.js';

describe('Pill', () => {
  it('has default style', () => {
    // Arrange
    const { screen } = render(<Pill label="Label" />, {
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
      const { screen } = render(<Pill label="Label" color="blue" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        backgroundColor: rgba('blue', 0.2),
      });
    });

    test('with opacity', () => {
      // Arrange
      const { screen } = render(<Pill label="Label" opacity={0.5} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        backgroundColor: rgba(defaultTheme.color.primary, 0.5),
      });
    });
  });

  describe('with label', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Pill label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });
  });
});
