import { rgba } from 'polished';
import render from 'tests/render.js';

import { Check } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Icon from '../Icon.js';

describe('Icon', () => {
  const testId = 'icon';

  describe('with backdrop', () => {
    describe('has background', () => {
      test('with color', () => {
        // Arrange
        const { screen } = render(
          <Icon backdrop color="red" data-testid={testId} with={Check} />,
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
        const { screen } = render(
          <Icon backdrop data-testid={testId} size="compact" with={Check} />,
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
        const { screen } = render(
          <Icon backdrop data-testid={testId} size={32} with={Check} />,
          {
            wrapper: ThemeProvider,
          },
        );

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
      const { screen } = render(
        <Icon data-testid={testId} size="compact" with={Check} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '16');
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '16');
    });

    it('has numeric height/width', () => {
      // Arrange
      const { screen } = render(
        <Icon data-testid={testId} size={32} with={Check} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByTestId(testId)).toHaveAttribute('height', '32');
      expect(screen.getByTestId(testId)).toHaveAttribute('width', '32');
    });
  });
});
