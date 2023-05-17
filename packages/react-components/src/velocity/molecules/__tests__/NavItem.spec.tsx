import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import NavItem from '../NavItem.js';

describe('NavItem', () => {
  it('has visible text', () => {
    // Arrange
    render(<NavItem icon="dashboard" label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
  });

  it('is accessible', () => {
    render(<NavItem icon="dashboard" label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveAccessibleName('Label');
  });

  describe('with compact', () => {
    it('has hidden text', () => {
      // Arrange
      render(<NavItem compact icon="dashboard" label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).not.toBeVisible();
    });
  });
});
