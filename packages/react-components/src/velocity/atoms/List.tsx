/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';

import Flex from '../primitives/Flex.js';
import Text from '../primitives/Text.js';

export interface ListProps extends ComponentPropsWithoutRef<'dl'> {
  items: Array<{
    label: string;
    value: string;
  }>;
}

const List = ({ items = [], ...props }: ListProps) => (
  <dl
    css={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      margin: 0,
      overflow: 'hidden',
    }}
    {...props}
  >
    {items.map((item) => (
      <Flex direction="column" key={item.label} spacing={8}>
        <Text as="dt" variant="c1">
          {item.label}
        </Text>
        <Text as="dd" css={{ margin: 0 }} variant="p1" truncate>
          {item.value}
        </Text>
      </Flex>
    ))}
  </dl>
);

export default List;
