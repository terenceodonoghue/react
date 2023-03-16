import { rgba } from 'polished';
import render from 'tests/render.js';

import { Check } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Icon from '../Icon.js';

describe('Icon', () => {
  const testId = 'icon';

  it('has default size', () => {
    // Arrange
    const { screen } = render(<Icon data-testid={testId} with={Check} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByTestId(testId)).toHaveAttribute('height', '24');
    expect(screen.getByTestId(testId)).toHaveAttribute('width', '24');
  });

  describe('with backdrop', () => {
    it('has default style', () => {
      // Arrange
      const { screen } = render(
        <Icon backdrop data-testid={testId} with={Check} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        padding: '14px',
        backgroundColor: rgba(defaultTheme.color.primary, 0.15),
      });
    });

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

      test('with opacity', () => {
        // Arrange
        const { screen } = render(
          <Icon backdrop={1} data-testid={testId} with={Check} />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByTestId(testId)).toHaveStyle({
          backgroundColor: rgba(defaultTheme.color.primary, 1),
        });
      });
    });

    describe('with size', () => {
      it('is compact', () => {
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
    });
  });

  describe('with size', () => {
    it('has height/width', () => {
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

    it('is compact', () => {
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
  });
});
