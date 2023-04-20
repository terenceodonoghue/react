import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Driver from '../Driver.js';

describe('Driver', () => {
  describe('has accessible components', () => {
    test('with avatar', () => {
      // Arrange
      const { screen } = render(
        <Driver
          name="Terence O'Donoghue"
          totalDistance="1km"
          totalEarnings="$1"
          vehicle="Honda Civic"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('img')).toHaveAccessibleName(
        "Terence O'Donoghue's avatar",
      );
    });
  });

  it('has visible status', () => {
    // Arrange
    const { screen } = render(
      <Driver
        name="Terence O'Donoghue"
        rank={1}
        totalDistance="1km"
        totalEarnings="$1"
        vehicle="Honda Civic"
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
  });

  it('has visible text', () => {
    // Arrange
    const { screen } = render(
      <Driver
        name="Terence O'Donoghue"
        totalDistance="1km"
        totalEarnings="$1"
        vehicle="Honda Civic"
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    expect(screen.getByText('1km')).toBeVisible();
    expect(screen.getByText('$1')).toBeVisible();
    expect(screen.getByText('Honda Civic')).toBeVisible();
  });
});
