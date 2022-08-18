import { faker } from '@faker-js/faker';

import { render } from '../../utils/test-utils';
import Button from './IconButton';

describe('IconButton', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<Button>{content}</Button>);

    expect(getByTestId('button')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
