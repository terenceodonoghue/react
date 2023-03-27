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

  describe('with name', () => {
    it('has visible text', () => {
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
  });

  describe('with interactions', () => {
    it('has visible text', () => {
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

    it('has pluralisation', () => {
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
