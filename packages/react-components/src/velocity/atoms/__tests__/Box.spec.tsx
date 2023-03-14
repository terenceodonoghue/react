import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Box from '../Box.js';

describe('Box', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Box>Content</Box>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Box />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '20px',
    });
  });

  it('has equal padding', () => {
    // Arrange
    const { screen } = render(<Box p={32} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '32px',
    });
  });

  it('has horizontal padding', () => {
    // Arrange
    const { screen } = render(<Box px={32} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '20px 32px',
    });
  });

  it('has vertical padding', () => {
    // Arrange
    const { screen } = render(<Box py={32} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '32px 20px',
    });
  });
});
