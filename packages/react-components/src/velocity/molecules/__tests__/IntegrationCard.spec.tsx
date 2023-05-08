import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import IntegrationCard from '../IntegrationCard.js';

describe('IntegrationCard', () => {
  it('has accessible name', () => {
    // Arrange
    const { screen } = render(
      <IntegrationCard icon={GitHub} label="Label" description="Description" />,
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
      <IntegrationCard icon={GitHub} label="Label" description="Description" />,
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
