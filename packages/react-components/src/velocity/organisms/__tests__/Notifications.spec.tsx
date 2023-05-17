import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Notifications from '../Notifications.js';

describe('Notifications', () => {
  it('is accessible', () => {
    // Arrange
    render(<Notifications />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('region')).toHaveAccessibleName('Notifications');
    expect(screen.getByRole('region')).toHaveAccessibleDescription(
      'Control your notification and auto-follow settings.',
    );
  });
});
