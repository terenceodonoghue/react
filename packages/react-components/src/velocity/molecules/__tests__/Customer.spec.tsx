import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Customer from '../Customer.js';

describe('Customer', () => {
  it('has accessible components', () => {
    // Arrange
    const { screen } = render(
      <Customer name="Terence O'Donoghue" interactions={1} />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('img')).toHaveAccessibleName(
      "Terence O'Donoghue's avatar",
    );
  });

  it('has visible components', () => {
    // Arrange
    const { screen } = render(
      <Customer name="Terence O'Donoghue" interactions={1} />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    expect(screen.getByText('1 interaction')).toBeVisible();

    screen.rerender(<Customer name="Terence O'Donoghue" interactions={2} />);

    expect(screen.getByText('2 interactions')).toBeVisible();
  });
});
