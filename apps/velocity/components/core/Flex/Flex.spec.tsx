import React from 'react';
import { faker } from '@faker-js/faker';
import { render } from 'test-utils';
import Flex from './Flex';

describe('Flex', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<Flex>{content}</Flex>);

    expect(getByTestId('flex')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
