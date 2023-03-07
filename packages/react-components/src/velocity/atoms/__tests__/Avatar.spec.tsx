import { faker } from '@faker-js/faker';
import render from 'tests/render.js';

import Avatar from '../Avatar.js';

const testId = faker.datatype.uuid();

describe('Avatar', () => {
  it('has default variant and size', () => {
    const { screen } = render(<Avatar data-testid={testId} />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
      height: '128px',
      width: '128px',
    });
  });

  it('renders rounded variant', () => {
    const { screen } = render(
      <Avatar data-testid={testId} variant="rounded" />,
    );
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '50%',
    });
  });

  it('renders square variant', () => {
    const { screen } = render(<Avatar data-testid={testId} variant="square" />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      borderRadius: '6px',
    });
  });

  it('renders custom size', () => {
    const size = 64;
    const { screen } = render(<Avatar data-testid={testId} size={size} />);
    expect(screen.getByTestId(testId)).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
    });
  });

  it('has alt text', () => {
    const alt = faker.hacker.phrase();
    const { screen } = render(<Avatar data-testid={testId} alt={alt} />);
    expect(screen.getByTestId(testId)).toHaveAttribute('alt', alt);
  });
});
