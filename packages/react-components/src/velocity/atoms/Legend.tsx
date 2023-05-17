/** @jsxImportSource @emotion/react */
import { ComponentPropsWithoutRef } from 'react';
import { LegendProps as RechartsLegendProps } from 'recharts';

import Text from '../primitives/Text.js';

export interface LegendProps extends ComponentPropsWithoutRef<'ul'> {
  payload?: RechartsLegendProps['payload'];
}

const Legend = ({ payload, ...props }: LegendProps) => (
  <ul
    css={{
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 24,
      marginTop: 0,
      padding: 0,
    }}
    {...props}
  >
    {payload?.map((entry) => (
      <Text
        align="center"
        as="li"
        css={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          '&::before': {
            content: '""',
            display: 'inline-block',
            width: 10,
            height: 10,
            backgroundColor: entry.color,
            borderRadius: '50%',
            fontSize: '1.5em',
          },
        }}
        key={entry.value}
        variant="p2"
      >
        {entry.value}
      </Text>
    ))}
  </ul>
);

export default Legend;
