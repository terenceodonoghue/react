import { rem } from 'polished';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Text from '../primitives/Text.js';

export interface TripDetailsProps extends HTMLAttributes<HTMLDivElement> {
  distance: string;
  energy: string;
  price: string;
  time: string;
}

const TripDetails: FunctionComponent<TripDetailsProps> = ({
  distance,
  energy,
  price,
  time,
  ...props
}) => (
  <div
    css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      columnGap: 16,
    }}
    {...props}
  >
    <Text css={{ lineHeight: rem(22) }} variant="h4" truncate>
      {distance}
    </Text>
    <Text css={{ lineHeight: rem(22) }} variant="h4" truncate>
      {time}
    </Text>
    <Text css={{ lineHeight: rem(22) }} variant="h4" truncate>
      {price}
    </Text>
    <Text css={{ lineHeight: rem(22) }} variant="h4" truncate>
      {energy}
    </Text>
    <Text variant="p2" truncate>
      Distance
    </Text>
    <Text variant="p2" truncate>
      Time
    </Text>
    <Text variant="p2" truncate>
      Price
    </Text>
    <Text variant="p2" truncate>
      Energy
    </Text>
  </div>
);

export default TripDetails;
