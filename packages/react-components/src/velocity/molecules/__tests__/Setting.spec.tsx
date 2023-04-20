import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Setting from '../Setting.js';

describe('Setting', () => {
  it('has accessible components', () => {
    // Arrange
    const { screen } = render(
      <Setting label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('switch')).toHaveAccessibleName('Label');
    expect(screen.getByRole('switch')).toHaveAccessibleDescription(
      'Description',
    );
  });

  it('has visible text', () => {
    // Arrange
    const { screen } = render(
      <Setting label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });
});
