import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import List from '../List.js';

describe('List', () => {
  it('has accessible elements', () => {
    // Arrange
    const { screen } = render(
      <List items={[{ label: 'Label', value: 'Value' }]} />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getByRole('term')).toBeVisible();
    expect(screen.getByRole('term')).toHaveTextContent('Label');
    expect(screen.getByRole('definition')).toBeVisible();
    expect(screen.getByRole('definition')).toHaveTextContent('Value');
  });
});
