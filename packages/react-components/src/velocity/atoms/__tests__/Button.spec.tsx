import { rgba } from 'polished';
import render from 'tests/render.js';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Button from '../Button.js';

describe('Button', () => {
  it('is accessible', () => {
    // Arrange
    const { screen } = render(<Button>Button Text</Button>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveAccessibleName('Button Text');
  });

  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Button>Button Text</Button>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Button Text')).toBeVisible();
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Button />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: defaultTheme.color.primary,
      color: 'white',
    });
  });

  it('has primary variant', () => {
    // Arrange
    const { screen } = render(<Button variant="primary" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: defaultTheme.color.primary,
      color: 'white',
    });
  });

  it('has outline variant', () => {
    // Arrange
    const { screen } = render(<Button variant="outline" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: rgba(
        defaultTheme.color.primary,
        defaultTheme.color.tonalOffset,
      ),
      color: defaultTheme.color.primary,
    });
  });

  it('has minimal variant', () => {
    // Arrange
    const { screen } = render(<Button variant="minimal" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'none',
      color: defaultTheme.color.primary,
    });
  });
});
