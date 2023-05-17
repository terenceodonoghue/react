import { render, screen } from '@testing-library/react';
import { rgba } from 'polished';
import { describe, expect, it } from 'vitest';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Button from '../Button.js';

describe('Button', () => {
  describe('with text', () => {
    it('is accessible', () => {
      // Arrange
      render(<Button>Button Text</Button>, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleName('Button Text');
    });
  });

  describe('with variant', () => {
    it('has primary style', () => {
      // Arrange
      render(<Button variant="primary" />, {
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
      render(<Button variant="outline" />, {
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
      render(<Button variant="minimal" />, {
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
