import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Setting from '../Setting.js';

describe('Setting', () => {
  it('has visible text', () => {
    // Arrange
    render(<Setting label="Label" description="Description" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });

  it('is accessible', () => {
    // Arrange
    render(<Setting label="Label" description="Description" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('switch')).toHaveAccessibleName('Label');
    expect(screen.getByRole('switch')).toHaveAccessibleDescription(
      'Description',
    );
  });
});
