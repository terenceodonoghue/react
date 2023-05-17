import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import TextField from '../TextField.js';

describe('TextField', () => {
  describe('with label', () => {
    it('has visible text', () => {
      // Arrange
      render(<TextField label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });

    it('is accessible', () => {
      // Arrange
      render(<TextField label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('textbox')).toHaveAccessibleName('Label');
    });
  });
});
