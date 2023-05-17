import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Pill from '../Pill.js';

describe('Pill', () => {
  it('has visible status', () => {
    // Arrange
    render(<Pill label={1} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toBeVisible();
    expect(screen.getByRole('status')).toHaveTextContent('1');
  });
});
