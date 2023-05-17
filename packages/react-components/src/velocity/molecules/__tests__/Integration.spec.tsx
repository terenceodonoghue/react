import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Integration from '../Integration.js';

describe('Integration', () => {
  it('has visible text', () => {
    // Arrange
    render(
      <Integration icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });

  it('is accessible', () => {
    // Arrange
    render(
      <Integration icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('checkbox')).toHaveAccessibleName('Label');
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription(
      'Description',
    );
  });
});
