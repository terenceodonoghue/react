import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Indicator from '../Indicator.js';

describe('Indicator', () => {
  it('has visible status', () => {
    // Arrange
    const { screen } = render(<Indicator visible />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
  });
});
