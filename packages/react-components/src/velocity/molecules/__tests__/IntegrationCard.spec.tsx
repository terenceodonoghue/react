import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import IntegrationCard from '../IntegrationCard.js';

describe('IntegrationCard', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(
      <IntegrationCard icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('status')).toHaveAccessibleName('Label');
    expect(screen.getByRole('status')).toHaveAccessibleDescription(
      'Description',
    );
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(
      <IntegrationCard icon={GitHub} label="Label" description="Description" />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByText('Label')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
