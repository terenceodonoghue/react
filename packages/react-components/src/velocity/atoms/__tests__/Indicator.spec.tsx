import render from 'tests/render.js';

import { Check } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Indicator from '../Indicator.js';

describe('Indicator', () => {
  it('has accessible role', () => {
    // Arrange
    const { screen } = render(<Indicator />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

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
    it('has background color', () => {
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

  describe('with content', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Indicator>Content</Indicator>, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Content')).toBeVisible();
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
    it('is visible', () => {
      // Arrange
      const { screen } = render(<Indicator visible />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('status')).toBeVisible();
    });

    it('is hidden', () => {
      // Arrange
      const { screen } = render(<Indicator visible={false} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.queryByRole('status')).not.toBeVisible();
    });
  });
});
