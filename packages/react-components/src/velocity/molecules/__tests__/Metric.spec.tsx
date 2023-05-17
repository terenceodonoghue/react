import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Metric from '../Metric.js';

describe('Metric', () => {
  it('has visible text', () => {
    // Arrange
    render(<Metric icon="check" label="Label" value="Value" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Value')).toBeVisible();
  });

  it('is accessible', () => {
    // Arrange
    render(<Metric icon="check" label="Label" value="Value" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('region')).toHaveAccessibleName('Label');
  });
});
