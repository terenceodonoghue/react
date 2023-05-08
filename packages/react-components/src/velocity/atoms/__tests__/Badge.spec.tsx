import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Badge from '../Badge.js';

describe('Badge', () => {
  it('has visible status', () => {
    // Arrange
    const { screen } = render(<Badge label={1} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('1');
  });
});
