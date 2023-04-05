import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import ChatCard from '../ChatCard.js';

describe('ChatCard', () => {
  const testId = 'chatCard';

  it('has default style', () => {
    // Arrange
    const { screen } = render(
      <ChatCard
        data-testid={testId}
        avatar="http://image-url.com"
        name="Terence O'Donoghue"
        message="Message"
        time="2m"
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      backgroundColor: defaultTheme.color.neutral[50],
    });
  });

  describe('with avatar', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
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
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    });

    test('with message', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Message')).toBeVisible();
    });

    test('with time', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('2m')).toBeVisible();
    });
  });

  describe('with online', () => {
    it('has indicator', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
          online
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('status')).toBeVisible();
    });
  });

  describe('with selected', () => {
    it('has selected style', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          data-testid={testId}
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
          time="2m"
          selected
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        backgroundColor: defaultTheme.color.neutral[100],
      });
    });
  });
});
