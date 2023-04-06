import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import ChatCard from '../ChatCard.js';

describe('ChatCard', () => {
  it('has accessible description', () => {
    // Arrange
    const { screen } = render(
      <ChatCard avatar="http://image-url.com" name="Terence O'Donoghue" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('button')).toHaveAccessibleDescription(
      'No messages',
    );
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(
      <ChatCard avatar="http://image-url.com" name="Terence O'Donoghue" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({
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
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(
        <ChatCard avatar="http://image-url.com" name="Terence O'Donoghue" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleName(
        "Chat with Terence O'Donoghue",
      );
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <ChatCard avatar="http://image-url.com" name="Terence O'Donoghue" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText("Terence O'Donoghue")).toBeVisible();
    });
  });

  describe('with message', () => {
    it('has accessible description', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('button')).toHaveAccessibleDescription(
        'Last message, Message',
      );
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          message="Message"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Message')).toBeVisible();
    });
  });

  describe('with time', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
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
    it('has status indicator', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
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
    it('has background', () => {
      // Arrange
      const { screen } = render(
        <ChatCard
          avatar="http://image-url.com"
          name="Terence O'Donoghue"
          selected
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: defaultTheme.color.neutral[100],
      });
    });
  });
});
