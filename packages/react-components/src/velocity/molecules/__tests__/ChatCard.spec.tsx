import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import ChatCard from '../ChatCard.js';

describe('ChatCard', () => {
  describe('has accessible name', () => {
    test('with active status', () => {
      // Arrange
      const { screen } = render(<ChatCard active name="Terence O'Donoghue" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleName(
        "Terence O'Donoghue, Active",
      );
    });

    test('with away status', () => {
      // Arrange
      const { screen } = render(
        <ChatCard active={false} name="Terence O'Donoghue" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleName(
        "Terence O'Donoghue, Away",
      );
    });
  });

  describe('has accessible components', () => {
    test('with avatar', () => {
      // Arrange
      const { screen } = render(<ChatCard name="Terence O'Donoghue" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByRole('img')).toHaveAccessibleName(
        "Terence O'Donoghue's avatar",
      );
    });
  });

  it('has visible status', () => {
    // Arrange
    const { screen } = render(<ChatCard name="Terence O'Donoghue" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).not.toBeVisible();

    // Arrange
    screen.rerender(<ChatCard active name="Terence O'Donoghue" />);

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
  });

  it('has visible text', () => {
    // Arrange
    const { screen } = render(
      <ChatCard name="Terence O'Donoghue" message="Message" time="2m" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    expect(screen.getByText('Message')).toBeVisible();
    expect(screen.getByText('2m')).toBeVisible();
  });
});
