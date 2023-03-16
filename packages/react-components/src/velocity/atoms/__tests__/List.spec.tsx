import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import List from '../List.js';

describe('List', () => {
  describe('with items', () => {
    it('has accessible roles', () => {
      // Arrange
      const { screen } = render(
        <List items={[{ label: 'Label', value: 'Value' }]} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('term')).toBeInTheDocument();
      expect(screen.getByRole('definition')).toBeInTheDocument();
    });

    it('has visible text', () => {
      // Arrange
      const { screen } = render(
        <List items={[{ label: 'Label', value: 'Value' }]} />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
      expect(screen.getByText('Value')).toBeVisible();
    });
  });
});
