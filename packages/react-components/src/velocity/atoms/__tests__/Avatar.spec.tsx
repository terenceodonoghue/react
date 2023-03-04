import { faker } from '@faker-js/faker';
import { screen } from '@testing-library/react';
import render from 'tests/render.js';

import Avatar from '../Avatar.js';

const testId = faker.datatype.uuid();

describe('Avatar', () => {
  it('has default variant and size', () => {
    render(<Avatar data-testid={testId} />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
      height: '128px',
      width: '128px',
    });
  });

  it('renders rounded variant', () => {
    render(<Avatar data-testid={testId} variant="rounded" />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
    });
  });

  it('renders square variant', () => {
    render(<Avatar data-testid={testId} variant="square" />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '6px',
    });
  });

  it('renders custom size', () => {
    const size = 64;
    render(<Avatar data-testid={testId} size={size} />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
    });
  });

  it('has alt text', () => {
    const alt = faker.hacker.phrase();
    render(<Avatar data-testid={testId} alt={alt} />);
    expect(screen.getByTestId(testId)).toHaveAttribute('alt', alt);
  });
});
