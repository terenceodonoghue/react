import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Main from '../Main.js';

describe('Main', () => {
  describe('with heading', () => {
    it('has visible text', () => {
      // Arrange
      render(<Main heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('heading')).toBeVisible();
      expect(screen.getByRole('heading')).toHaveTextContent('Heading');
    });

    it('is accessible', () => {
      // Arrange
      render(<Main heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('main')).toHaveAccessibleName('Heading');
      expect(screen.getByRole('heading')).toHaveAccessibleName('Heading');
    });
  });
});
