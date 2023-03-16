import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Badge from '../Badge.js';

describe('Badge', () => {
  it('has accessible role', () => {
    // Arrange
    const { screen } = render(<Badge />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Badge />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveStyle({
      opacity: 0,
    });
  });

  describe('with content', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Badge>Content</Badge>, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Content')).toBeVisible();
    });
  });

  describe('with label', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<Badge label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });
  });
});
