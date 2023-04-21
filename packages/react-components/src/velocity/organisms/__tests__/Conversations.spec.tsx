import render from 'tests/render.js';

import ThemeProvider from '../../providers/ThemeProvider.js';
import Conversations from '../Conversations.js';

describe('Conversations', () => {
  it('has accessible components', () => {
    // Arrange
    const { screen } = render(
      <Conversations
        list={[
          { avatar: 'http://image-url.com', name: "Terence O'Donoghue" },
          { avatar: 'http://image-url.com', name: 'Jane Appleseed' },
        ]}
      />,
      {
        wrapper: ThemeProvider,
      },
    );

    // Assert
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });
});
