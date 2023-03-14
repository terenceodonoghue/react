import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import List from '../List.js';

describe('List', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(
      <List
        items={[
          { label: 'term 1', value: 'definition 1' },
          { label: 'term 2', value: 'definition 2' },
        ]}
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    ['term', 'definition'].forEach((role) => {
      expect(screen.getAllByRole(role)).toHaveLength(2);
      screen
        .getAllByRole(role)
        .forEach((item, number) =>
          expect(item).toHaveTextContent(`${role} ${number + 1}`),
        );
    });
  });
});
