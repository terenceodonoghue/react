import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Backdrop from '../Backdrop.js';

describe('Backdrop', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Backdrop>Content</Backdrop>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveTextContent('Content');
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Backdrop />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '14px',
      backgroundColor: rgba(defaultTheme.color.primary, 0.15),
    });
  });

  it('has color and opacity', () => {
    // Arrange
    const { screen } = render(<Backdrop color="blue" opacity={0.5} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      backgroundColor: rgba('blue', 0.5),
    });
  });

  it('is compact', () => {
    // Arrange
    const { screen } = render(<Backdrop compact />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('presentation')).toHaveStyle({
      padding: '8px',
    });
  });
});
