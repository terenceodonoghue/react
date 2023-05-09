import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Pill from '../Pill.js';

describe('Pill', () => {
  it('has visible text', () => {
    // Arrange
    const { screen } = render(<Pill label={1} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('1');
  });
});
