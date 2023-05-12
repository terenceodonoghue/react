import render from 'tests/render.js';

import Avatar from '../Avatar.js';

describe('Avatar', () => {
  describe('with alt text', () => {
    it('has accessible name', () => {
      // Arrange
      const { screen } = render(<Avatar alt="Alt text" />);

      // Assert
      expect(screen.getByRole('img')).toHaveAccessibleName('Alt text');
    });
  });

  describe('with size', () => {
    it('has height/width', () => {
      // Arrange
      const { screen } = render(<Avatar size={64} />);

      // Assert
      expect(screen.getByRole('img')).toHaveStyle({
        height: '64px',
        width: '64px',
      });
    });
  });

  describe('with variant', () => {
    it('has rounded style', () => {
      // Arrange
      const { screen } = render(<Avatar variant="rounded" />);

      // Assert
      expect(screen.getByRole('img')).toHaveStyle({
        borderRadius: '50%',
      });
    });

    it('has squared style', () => {
      // Arrange
      const { screen } = render(<Avatar variant="squared" />);

      // Assert
      expect(screen.getByRole('img')).toHaveStyle({
        borderRadius: '6px',
      });
    });
  });
});
