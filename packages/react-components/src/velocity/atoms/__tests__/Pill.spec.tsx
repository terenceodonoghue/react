import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Pill from '../Pill.js';

describe('Pill', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Pill label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveTextContent('Label');
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Pill label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveStyle({
      backgroundColor: rgba(defaultTheme.color.primary, 0.2),
    });
  });

  it('has color and opacity', () => {
    // Arrange
    const { screen } = render(
      <Pill label="Label" color="blue" opacity={0.5} />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('status')).toHaveStyle({
      backgroundColor: rgba('blue', 0.5),
    });
  });
});
