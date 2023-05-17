import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import IconButton from '../IconButton.js';

describe('IconButton', () => {
  describe('with variant', () => {
    it('has rounded style', () => {
      // Arrange
      render(<IconButton variant="rounded" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        borderRadius: '50%',
      });
    });

    it('has squared style', () => {
      // Arrange
      render(<IconButton variant="squared" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        borderRadius: '4px',
      });
    });
  });
});
