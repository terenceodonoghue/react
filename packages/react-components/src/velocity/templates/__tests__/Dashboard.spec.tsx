import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Dashboard from '../Dashboard.js';

describe('Dashboard', () => {
  beforeAll(() => {
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );
  });

  it('has visible landmarks', () => {
    // Arrange
    render(<Dashboard drivers={[]} operatingScore={0} />, {
      wrapper: ThemeProvider,
    });

    [
      'Operating score',
      "Today's trips",
      'Vehicles on track',
      'Distance driven',
      'Fleet activity map',
      'Top drivers',
      'Service reminders',
    ].forEach((name) =>
      // Assert
      expect(screen.getByRole('region', { name })).toBeVisible(),
    );
  });
});
