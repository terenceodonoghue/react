import React from 'react';
import { render } from '../../utils/test-utils';
import { defaultTheme } from '../ThemeProvider';
import Button from './Button';

describe('Button', () => {
  it('is contained by default', () => {
    const { container, getByTestId } = render(<Button />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.accent,
      color: defaultTheme.palette.neutral[50],
    });
    expect(container).toMatchSnapshot();
  });

  it('renders contained variant', () => {
    const { container, getByTestId } = render(<Button variant="contained" />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.accent,
      color: defaultTheme.palette.neutral[50],
    });
    expect(container).toMatchSnapshot();
  });

  it('renders icon variant', () => {
    const { container, getByTestId } = render(<Button variant="icon" />);

    expect(getByTestId('button')).toHaveStyle({
      background: 'none',
    });
    expect(container).toMatchSnapshot();
  });

  it('renders outlined variant', () => {
    const { container, getByTestId } = render(<Button variant="outlined" />);

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: defaultTheme.palette.primary,
      color: defaultTheme.palette.accent,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders text variant', () => {
    const { container, getByTestId } = render(<Button variant="text" />);

    expect(getByTestId('button')).toHaveStyle({
      background: 'none',
      color: defaultTheme.palette.accent,
    });
    expect(container).toMatchSnapshot();
  });
});
