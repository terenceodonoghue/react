import React from 'react';
import faker from 'faker';
import { render } from 'test-utils';
import Drawer from './Drawer';

describe('Drawer', () => {
  it('is closed by default', () => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const { container, getByTestId } = render(
      <Drawer avatar={avatar} name={name} />,
    );

    expect(getByTestId('drawer')).toHaveStyle({ width: '80px' });
    expect(container).toMatchSnapshot();
  });

  it('expands when opened', () => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const { container, getByTestId } = render(
      <Drawer avatar={avatar} name={name} open />,
    );

    expect(getByTestId('drawer')).toHaveStyle({ width: '215px' });
    expect(container).toMatchSnapshot();
  });

  it('anchors to the left', () => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const { container, getByTestId } = render(
      <Drawer anchor="left" avatar={avatar} name={name} />,
    );

    expect(getByTestId('drawer')).toHaveStyle({ left: 0 });
    expect(container).toMatchSnapshot();
  });

  it('anchors to the right', () => {
    const avatar = faker.image.avatar();
    const name = faker.name.findName();
    const { container, getByTestId } = render(
      <Drawer anchor="right" avatar={avatar} name={name} />,
    );

    expect(getByTestId('drawer')).toHaveStyle({ right: 0 });
    expect(container).toMatchSnapshot();
  });
});
