import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import TextField from '../TextField.js';

describe('TextField', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<TextField label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('textbox')).toHaveAccessibleName('Label');
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(<TextField label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
});
