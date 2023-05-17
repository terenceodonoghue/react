import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Integrations from '../Integrations.js';

describe('Integrations', () => {
  it('is accessible', () => {
    // Arrange
    render(<Integrations />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('region')).toHaveAccessibleName('Integrations');
    expect(screen.getByRole('region')).toHaveAccessibleDescription(
      'Manage third-party app integrations.',
    );
  });
});
