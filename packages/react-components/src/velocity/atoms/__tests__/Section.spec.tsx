import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Section from '../Section.js';

describe('Section', () => {
  describe('with heading', () => {
    it('has visible text', () => {
      // Arrange
      render(<Section heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('heading')).toBeVisible();
      expect(screen.getByRole('heading')).toHaveTextContent('Heading');
    });

    it('is accessible', () => {
      // Arrange
      render(<Section heading="Heading" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('region')).toHaveAccessibleName('Heading');
      expect(screen.getByRole('heading')).toHaveAccessibleName('Heading');
    });
  });
});
