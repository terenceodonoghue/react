import { faker } from '@faker-js/faker';
import { render } from '../../utils/test-utils';
import AppBar from './AppBar';

describe('AppBar', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<AppBar>{content}</AppBar>);

    expect(getByTestId('app-bar')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });
});
