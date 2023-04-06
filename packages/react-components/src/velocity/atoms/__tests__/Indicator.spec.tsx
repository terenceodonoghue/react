import render from 'tests/render.js';

import { Check } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Indicator from '../Indicator.js';

describe('Indicator', () => {
  it('has default style', () => {
    // Arrange
    const { screen } = render(<Indicator />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveStyle({
      border: `solid 2px ${defaultTheme.color.neutral[50]}`,
      height: '12px',
      width: '12px',
      backgroundColor: defaultTheme.color.primary,
      opacity: 1,
      transform: '',
    });
  });

  describe('with color', () => {
    it('has background', () => {
      // Arrange
      const { screen } = render(<Indicator color="red" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        backgroundColor: 'red',
      });
    });
  });

  describe('with icon', () => {
    it('has default style', () => {
      // Arrange
      const { screen } = render(<Indicator icon={Check} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toHaveStyle({
        border: '',
        height: '18px',
        width: '18px',
        backgroundColor: defaultTheme.color.primary,
        transform: 'translate(8px, -7px)',
      });
    });
  });

  describe('with visible', () => {
    it('has visible status', () => {
      // Arrange
      const { screen } = render(<Indicator visible />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toBeVisible();
    });
  });
});