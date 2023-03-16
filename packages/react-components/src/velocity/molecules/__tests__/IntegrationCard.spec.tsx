import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider from '../../providers/ThemeProvider.js';
import IntegrationCard from '../IntegrationCard.js';

describe('IntegrationCard', () => {
  describe('with label', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('status')).toHaveAccessibleName('Label');
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });
  });

  describe('with description', () => {
    it('has accessible description', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('status')).toHaveAccessibleDescription(
        'Description',
      );
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Description')).toBeVisible();
    });
  });
});
