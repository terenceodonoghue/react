import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Box from '../Box.js';

describe('Box', () => {
  const testId = 'box';

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Box data-testid={testId} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      paddingBlock: '20px',
      paddingInline: '20px',
    });
  });

  describe('has padding', () => {
    test('with p', () => {
      // Arrange
      const { screen } = render(<Box data-testid={testId} p={32} />, {
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
      const { screen } = render(<Box data-testid={testId} px={32} />, {
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
      const { screen } = render(<Box data-testid={testId} py={32} />, {
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
