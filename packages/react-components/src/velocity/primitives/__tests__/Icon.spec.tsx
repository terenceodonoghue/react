import { render, screen } from '@testing-library/react';
import { rgba } from 'polished';
import { describe, expect, it, test } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Icon from '../Icon.js';

describe('Icon', () => {
  const testId = 'icon';

  describe('with backdrop', () => {
    describe('has background', () => {
      test('with color', () => {
        // Arrange
        render(
          <Icon backdrop color="red" data-testid={testId} with="check" />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByTestId(testId)).toHaveStyle({
          backgroundColor: rgba('red', 0.15),
        });
      });
    });

    describe('has padding', () => {
      test('with compact size', () => {
        // Arrange
        render(
          <Icon backdrop data-testid={testId} size="compact" with="check" />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByTestId(testId)).toHaveStyle({
          padding: '8px',
        });
      });

      test('with numeric size', () => {
        // Arrange
        render(<Icon backdrop data-testid={testId} size={32} with="check" />, {
          wrapper: ThemeProvider,
        });

        // Assert
        expect(screen.getByTestId(testId)).toHaveStyle({
          padding: '14px',
        });
      });
    });
  });

  describe('with size', () => {
    it('has compact height/width', () => {
      // Arrange
      render(<Icon data-testid={testId} size="compact" with="check" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '16');
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '16');
    });

    it('has numeric height/width', () => {
      // Arrange
      render(<Icon data-testid={testId} size={32} with="check" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '32');
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '32');
    });
  });
});
