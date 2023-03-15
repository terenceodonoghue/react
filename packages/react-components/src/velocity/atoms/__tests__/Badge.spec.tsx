import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Badge from '../Badge.js';

describe('Badge', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Badge label="Label">Content</Badge>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Content')).toBeVisible();
  });
});
