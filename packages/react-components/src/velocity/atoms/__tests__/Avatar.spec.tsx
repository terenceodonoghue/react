import render from 'tests/render.js';

import Avatar from '../Avatar.js';

describe('Avatar', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<Avatar alt="Alt text" />);

    // Assert
    expect(screen.getByRole('img')).toHaveAccessibleName('Alt text');
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Avatar />);

    // Assert
    expect(screen.getByRole('img')).toHaveStyle({
      borderRadius: '50%',
      height: '128px',
      width: '128px',
    });
  });

  it('has rounded variant', () => {
    // Arrange
    const { screen } = render(<Avatar variant="rounded" />);

    // Assert
    expect(screen.getByRole('img')).toHaveStyle({
      borderRadius: '50%',
    });
  });

  it('has squared variant', () => {
    // Arrange
    const { screen } = render(<Avatar variant="squared" />);

    // Assert
    expect(screen.getByRole('img')).toHaveStyle({
      borderRadius: '6px',
    });
  });

  it('has size', () => {
    // Arrange
    const { screen } = render(<Avatar size={64} />);

    // Assert
    expect(screen.getByRole('img')).toHaveStyle({
      height: '64px',
      width: '64px',
    });
  });
});
