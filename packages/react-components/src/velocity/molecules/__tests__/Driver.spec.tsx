import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Driver from '../Driver.js';

describe('Driver', () => {
  describe('has visible text', () => {
    test('with name', () => {
      // Arrange
      const { screen } = render(
        <Driver
          avatar="http://image-url.com"
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
    });

    test('with totalDistance', () => {
      // Arrange
      const { screen } = render(
        <Driver
          avatar="http://image-url.com"
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
      expect(screen.getByText('1km')).toBeVisible();
    });

    test('with totalEarnings', () => {
      // Arrange
      const { screen } = render(
        <Driver
          avatar="http://image-url.com"
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
      expect(screen.getByText('$1')).toBeVisible();
    });
  });

  describe('with avatar', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(
        <Driver
          avatar="http://image-url.com"
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

  describe('with rank', () => {
    it('has status badge', () => {
      // Arrange
      const { screen } = render(
        <Driver
          avatar="http://image-url.com"
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
      expect(screen.getByRole('status')).toHaveTextContent('1');
    });
  });
});
