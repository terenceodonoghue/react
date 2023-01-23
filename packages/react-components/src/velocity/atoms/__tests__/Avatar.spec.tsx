import { faker } from '@faker-js/faker';
import { screen } from '@testing-library/react';
import setup from '@tests/setup.js';

import Avatar from '../Avatar.js';

const TEST_ID = 'avatar';

describe('Avatar', () => {
  it('has default variant and size', () => {
    setup(<Avatar data-testid={TEST_ID} />);
    expect(screen.getByTestId(TEST_ID)).toHaveStyle({
      borderRadius: '50%',
      height: '128px',
      width: '128px',
    });
  });

  it('renders rounded variant', () => {
    setup(<Avatar data-testid={TEST_ID} variant="rounded" />);
    expect(screen.getByTestId(TEST_ID)).toHaveStyle({
      borderRadius: '50%',
    });
  });

  it('renders square variant', () => {
    setup(<Avatar data-testid={TEST_ID} variant="square" />);
    expect(screen.getByTestId(TEST_ID)).toHaveStyle({
      borderRadius: '6px',
    });
  });

  it('renders custom size', () => {
    const size = 64;
    setup(<Avatar data-testid={TEST_ID} size={size} />);
    expect(screen.getByTestId(TEST_ID)).toHaveStyle({
      height: `${size}px`,
      width: `${size}px`,
    });
  });

  it('renders alt text', () => {
    const alt = faker.hacker.phrase();
    setup(<Avatar data-testid={TEST_ID} alt={alt} />);
    expect(screen.getByTestId(TEST_ID)).toHaveAttribute('alt', alt);
  });
});
