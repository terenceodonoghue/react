import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import List from '../List.js';

describe('List', () => {
  it('has visible text', () => {
    // Arrange
    render(<List items={[{ label: 'Label', value: 'Value' }]} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('term')).toBeVisible();
    expect(screen.getByRole('term')).toHaveTextContent('Label');
    expect(screen.getByRole('definition')).toBeVisible();
    expect(screen.getByRole('definition')).toHaveTextContent('Value');
  });
});
