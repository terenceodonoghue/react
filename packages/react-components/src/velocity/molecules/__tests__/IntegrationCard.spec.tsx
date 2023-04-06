import render from 'tests/render.js';

import { GitHub } from '@terenceodonoghue/react-icons/brands';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import IntegrationCard from '../IntegrationCard.js';

describe('IntegrationCard', () => {
  const testId = 'integrationCard';

  it('has default style', () => {
    // Arrange
    const { screen } = render(
      <IntegrationCard
        data-testid={testId}
        icon={GitHub}
        label="Label"
        description="Description"
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderColor: defaultTheme.color.secondary,
    });
  });

  describe('with enabled', () => {
    it('has border', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          data-testid={testId}
          enabled
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByTestId(testId)).toHaveStyle({
        borderColor: defaultTheme.color.primary,
      });
    });

    it('has visible status', () => {
      // Arrange
      const { screen } = render(
        <IntegrationCard
          enabled
          icon={GitHub}
          label="Label"
          description="Description"
        />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('status')).toBeVisible();
    });
  });

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
