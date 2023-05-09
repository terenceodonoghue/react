import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Integration from '../Integration.js';

describe('Integration', () => {
  it('has accessible name', () => {
    // Arrange
    const { screen } = render(
      <Integration icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('checkbox')).toHaveAccessibleName('Label');
  });

  it('has accessible description', () => {
    // Arrange
    const { screen } = render(
      <Integration icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('checkbox')).toHaveAccessibleDescription(
      'Description',
    );
  });
});
