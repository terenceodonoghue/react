import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Conversation from '../Conversation.js';

describe('Conversation', () => {
  describe('has accessible name', () => {
    test('with active status', () => {
      // Arrange
      const { screen } = render(
        <Conversation active name="Terence O'Donoghue" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('radio')).toHaveAccessibleName(
        "Terence O'Donoghue, Active",
      );
    });

    test('with away status', () => {
      // Arrange
      const { screen } = render(
        <Conversation active={false} name="Terence O'Donoghue" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('radio')).toHaveAccessibleName(
        "Terence O'Donoghue, Away",
      );
    });
  });

  it('has accessible components', () => {
    // Arrange
    const { screen } = render(<Conversation name="Terence O'Donoghue" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('img')).toHaveAccessibleName(
      "Terence O'Donoghue's avatar",
    );
  });

  it('has visible status', () => {
    // Arrange
    const { screen } = render(
      <Conversation active name="Terence O'Donoghue" />,
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
      <Conversation name="Terence O'Donoghue" message="Message" time="2m" />,
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
