import render from 'tests/render.js';

import { Check } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import Indicator from '../Indicator.js';

describe('Indicator', () => {
  it('has visible content', () => {
    // Arrange
    const { screen } = render(<Indicator>Content</Indicator>, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status')).toHaveTextContent('Content');
  });

  it('has default style', () => {
    // Arrange
    const { screen } = render(<Indicator />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status').firstElementChild).toHaveStyle({
      border: `solid 2px ${defaultTheme.color.neutral[50]}`,
      height: '12px',
      width: '12px',
      backgroundColor: defaultTheme.color.primary,
      transform: '',
    });
  });

  it('has color', () => {
    // Arrange
    const { screen } = render(<Indicator color="red" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('status').firstElementChild).toHaveStyle({
      backgroundColor: 'red',
    });
  });

  it('has icon', () => {
    // Arrange
    const { screen } = render(<Indicator icon={Check} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(
      screen.getByRole('status').firstElementChild,
    ).not.toBeEmptyDOMElement();
    expect(screen.getByRole('status').firstElementChild).toHaveStyle({
      border: '',
      height: '18px',
      width: '18px',
      backgroundColor: defaultTheme.color.primary,
      transform: 'translate(8px, -7px)',
    });
  });

  it('is not visible', () => {
    // Arrange
    const { screen } = render(<Indicator visible={false} />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(
      screen.queryByRole('status')?.firstElementChild,
    ).not.toBeInTheDocument();
  });
});
