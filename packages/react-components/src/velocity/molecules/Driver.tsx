/** @jsxImportSource @emotion/react */
import type { FunctionComponent, HTMLAttributes } from 'react';

import Avatar from '../atoms/Avatar.js';
import Badge from '../atoms/Badge.js';
import Text from '../primitives/Text.js';

export interface DriverProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  name: string;
  rank?: number;
  totalDistance: string;
  totalEarnings: string;
  vehicle: string;
}

const Driver: FunctionComponent<DriverProps> = ({
  avatar,
  name,
  rank,
  totalDistance,
  totalEarnings,
  vehicle,
  ...props
}) => (
  <div css={{ display: 'flex', alignItems: 'center', gap: 16 }} {...props}>
    <Badge label={rank}>
      <Avatar alt={`${name}'s avatar`} size={48} src={avatar} />
    </Badge>
    <div css={{ display: 'grid', gridTemplateColumns: '2fr 1fr', flex: 1 }}>
      <Text as="span" variant="h4">
        {name}
      </Text>
      <Text as="span" variant="p1" align="right">
        {totalEarnings}
      </Text>
      <Text as="span" variant="p2" truncate>
        {vehicle}
      </Text>
      <Text as="span" variant="p2" align="right" truncate>
        {totalDistance}
      </Text>
    </div>
  </div>
);

export default Driver;
