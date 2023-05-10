import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Integration from '../Integration.js';

describe('Integration', () => {
  it('has accessible elements', () => {
    // Arrange
    const { screen } = render(
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

  it('has visible text', () => {
    // Arrange
    const { screen } = render(
      <Integration icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
    expect(screen.getByText('Description')).toBeVisible();
  });
});
