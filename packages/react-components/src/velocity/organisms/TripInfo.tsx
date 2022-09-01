import { useTheme } from '@emotion/react';
import type { FunctionComponent } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import TripDetails, {
  type TripDetailsProps,
} from '../molecules/TripDetails.js';
import TripSummary, {
  type TripSummaryProps,
} from '../molecules/TripSummary.js';

export type TripInfoProps = CardProps & TripDetailsProps & TripSummaryProps;

const TripInfo: FunctionComponent<TripInfoProps> = ({
  destination,
  destinationAddress,
  distance,
  energy,
  origin,
  originAddress,
  price,
  time,
  ...props
}) => {
  const { color } = useTheme();

  return (
    <Card css={{ paddingBottom: 24 }} {...props}>
      <TripSummary
        css={{
          '&::after': {
            content: '""',
            gridColumn: '1 / 3',
            height: 1,
            margin: '20px -24px 24px',
            backgroundColor: color.neutral[300],
          },
        }}
        origin={origin}
        originAddress={originAddress}
        destination={destination}
        destinationAddress={destinationAddress}
      />
      <TripDetails
        distance={distance}
        time={time}
        price={price}
        energy={energy}
      />
    </Card>
  );
};

export default TripInfo;
