/** @jsxImportSource @emotion/react */
import type { FunctionComponent, HTMLAttributes } from 'react';

import Text from '../primitives/Text.js';

export interface ListProps extends HTMLAttributes<HTMLDListElement> {
  items: {
    label: string;
    value: string;
  }[];
}

const List: FunctionComponent<ListProps> = ({ items = [], ...props }) => (
  <dl
    css={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      margin: 0,
      overflow: 'hidden',
    }}
    {...props}
  >
    {items.map((item) => (
      <div key={item.label}>
        <Text as="dt" css={{ marginBottom: 8 }} variant="c1">
          {item.label}
        </Text>
        <Text as="dd" css={{ margin: 0 }} variant="p1" truncate>
          {item.value}
        </Text>
      </div>
    ))}
  </dl>
);

export default List;
