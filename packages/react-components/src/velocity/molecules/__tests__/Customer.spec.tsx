import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Customer from '../Customer.js';

describe('Customer', () => {
  describe('with avatar', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(
        <Customer
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          interactions={1}
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

  describe('has visible text', () => {
    test('with name', () => {
      // Arrange
      const { screen } = render(
        <Customer avatar="" name="Terence O'Donoghue" interactions={1} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    });

    describe('with interactions', () => {
      it('is singular', () => {
        // Arrange
        const { screen } = render(
          <Customer avatar="" name="Terence O'Donoghue" interactions={1} />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByText('1 interaction')).toBeVisible();
      });

      it('is pluralised', () => {
        // Arrange
        const { screen } = render(
          <Customer avatar="" name="Terence O'Donoghue" interactions={2} />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByText('2 interactions')).toBeVisible();
      });
    });
  });
});
