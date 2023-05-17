import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Pane from '../Pane.js';

describe('Pane', () => {
  const testId = 'pane';

  describe('has padding', () => {
    test('with p', () => {
      // Arrange
      render(<Pane data-testid={testId} p={32} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBlock: '32px',
        paddingInline: '32px',
      });
    });

    test('with px', () => {
      // Arrange
      render(<Pane data-testid={testId} px={32} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBlock: '20px',
        paddingInline: '32px',
      });
    });

    test('with py', () => {
      // Arrange
      render(<Pane data-testid={testId} py={32} />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        paddingBlock: '32px',
        paddingInline: '20px',
      });
    });
  });
});
