import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Conversation from '../Conversation.js';

describe('Conversation', () => {
  it('has visible text', () => {
    // Arrange
    render(
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

  it('is accessible', () => {
    // Arrange
    render(<Conversation name="Terence O'Donoghue" unread />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('img')).toHaveAccessibleName(
      "Terence O'Donoghue's avatar",
    );
    expect(screen.getByRole('radio')).toHaveAccessibleName(
      "Terence O'Donoghue",
    );
    expect(screen.getByRole('status')).toHaveAccessibleName('Unread');
  });
});
