import render from 'tests/render.js';

import Avatar from '../Avatar.js';

describe('Avatar', () => {
  const testId = 'avatar';

  it('renders default variant and size', () => {
    // Arrange
    const { screen } = render(<Avatar data-testid={testId} />);

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
      height: '128px',
      width: '128px',
    });
  });

  it('renders rounded variant', () => {
    // Arrange
    const { screen } = render(
      <Avatar data-testid={testId} variant="rounded" />,
    );

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
    });
  });

  it('renders square variant', () => {
    // Arrange
    const { screen } = render(<Avatar data-testid={testId} variant="square" />);

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '6px',
    });
  });

  it('renders custom size', () => {
    // Arrange
    const { screen } = render(<Avatar data-testid={testId} size={64} />);

    // Assert
    expect(screen.getByTestId(testId)).toHaveStyle({
      height: '64px',
      width: '64px',
    });
  });

  it('has alt text', () => {
    // Arrange
    const { screen } = render(<Avatar data-testid={testId} alt="Alt text" />);

    // Assert
    expect(screen.getByTestId(testId)).toHaveAttribute('alt', 'Alt text');
  });
});
