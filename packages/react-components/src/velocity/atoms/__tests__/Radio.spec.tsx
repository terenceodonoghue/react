import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Radio from '../Radio.js';

describe('Radio', () => {
  describe('with label', () => {
    it('has visible text', () => {
      // Arrange
      render(<Radio label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });

    it('is accessible', () => {
      // Arrange
      render(<Radio label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('radio')).toHaveAccessibleName('Label');
    });
  });
});
