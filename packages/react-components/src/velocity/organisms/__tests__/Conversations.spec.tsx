import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Conversations from '../Conversations.js';

describe('Conversations', () => {
  it('is accessible', () => {
    // Arrange
    render(<Conversations />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('group')).toHaveAccessibleName('Conversations');
    expect(screen.getByRole('group')).toHaveAccessibleDescription(
      'No unread messages',
    );

    // Arrange
    render(
      <Conversations
        list={[
          { name: "Terence O'Donoghue", unread: true },
          { name: 'Jane Appleseed' },
        ]}
      />,
    );

    // Assert
    expect(screen.getByRole('group')).toHaveAccessibleDescription(
      '1 conversation with unread messages',
    );

    // Arrange
    render(
      <Conversations
        list={[
          { name: "Terence O'Donoghue", unread: true },
          { name: 'Jane Appleseed', unread: true },
        ]}
      />,
    );

    // Assert
    expect(screen.getByRole('group')).toHaveAccessibleDescription(
      '2 conversations with unread messages',
    );
  });
});
