/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import type { FunctionComponent, HTMLAttributes } from 'react';

import { Check, Marker } from '@terenceodonoghue/react-icons/velocity';

import Icon from '../atoms/Icon.js';
import Text from '../primitives/Text.js';

export interface TripSummaryProps extends HTMLAttributes<HTMLDivElement> {
  destination: string;
  destinationAddress: string;
  origin: string;
  originAddress: string;
}

const TripSummary: FunctionComponent<TripSummaryProps> = ({
  destination,
  destinationAddress,
  origin,
  originAddress,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 8,
        rowGap: 12,
      }}
      {...props}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          '&::after': {
            flex: 1,
            content: '""',
            marginLeft: 8,
            height: 2,
            width: '100%',
            backgroundColor: rgba(color.ui.blue, 0.15),
          },
        }}
      >
        <Icon backdrop color={color.ui.blue} size="compact" with={Check} />
      </div>
      <Icon backdrop color={color.ui.green} size="compact" with={Marker} />
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Text css={{ lineHeight: rem(22) }} as="span" variant="h4" truncate>
          {origin}
        </Text>
        <Text as="span" variant="p2" truncate>
          {originAddress}
        </Text>
      </div>
      <div
        css={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      >
        <Text css={{ lineHeight: rem(22) }} as="span" variant="h4" truncate>
          {destination}
        </Text>
        <Text as="span" variant="p2" truncate>
          {destinationAddress}
        </Text>
      </div>
    </div>
  );
};

export default TripSummary;
