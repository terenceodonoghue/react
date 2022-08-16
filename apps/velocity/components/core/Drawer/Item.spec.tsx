import { faker } from '@faker-js/faker';
import { rgba } from 'polished';
import { render } from '../../utils/test-utils';
import { defaultTheme } from '../ThemeProvider';
import Item from './Item';

describe('Item', () => {
  it('renders content', () => {
    const content = faker.hacker.phrase();
    const { container, getByTestId } = render(<Item>{content}</Item>);

    expect(getByTestId('drawer-item-text')).toHaveTextContent(content);
    expect(container).toMatchSnapshot();
  });

  it('shows text by default', () => {
    const { container, getByTestId } = render(<Item />);

    expect(getByTestId('drawer-item-text')).toHaveStyle({
      opacity: 1,
    });
    expect(container).toMatchSnapshot();
  });

  it('renders compact variant', () => {
    const { container, getByTestId } = render(<Item compact />);

    expect(getByTestId('drawer-item-text')).toHaveStyle({
      opacity: 0,
    });
    expect(container).toMatchSnapshot();
  });

  it('is unselected by default', () => {
    const { container, getByTestId } = render(<Item />);

    expect(getByTestId('drawer-item')).toHaveStyle({
      borderLeft: 'solid 3px transparent',
    });
    expect(getByTestId('drawer-item')).not.toHaveStyle({
      backgroundColor: rgba(defaultTheme.color.primary, 0.1),
    });
    expect(container).toMatchSnapshot();
  });

  it('renders selected item', () => {
    const { container, getByTestId } = render(<Item selected />);

    expect(getByTestId('drawer-item')).toHaveStyle({
      borderLeft: `solid 3px ${defaultTheme.color.primary}`,
    });
    expect(getByTestId('drawer-item')).toHaveStyle({
      backgroundColor: rgba(defaultTheme.color.primary, 0.1),
    });
    expect(container).toMatchSnapshot();
  });

  it('renders an icon', () => {
    const { container, getByTestId } = render(
      <Item icon={(props) => <svg {...props} />} />,
    );

    expect(getByTestId('drawer-item-icon')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
