/** @jsxImportSource @emotion/react */
import { FunctionComponent } from 'react';

import Avatar from '../atoms/Avatar.js';
import Badge from '../atoms/Badge.js';
import Text from '../primitives/Text.js';

export interface DriverProps {
  avatar: string;
  description: string;
  name: string;
  rank: number;
  totalDistance: string;
  totalEarnings: string;
}

const Driver: FunctionComponent<DriverProps> = ({
  avatar,
  description,
  name,
  rank,
  totalDistance,
  totalEarnings,
}) => (
  <div css={{ display: 'flex', alignItems: 'center', gap: 16 }}>
    <Badge label={rank}>
      <Avatar size={48} src={avatar} />
    </Badge>
    <div css={{ display: 'grid', gridTemplateColumns: '2fr 1fr', flex: 1 }}>
      <Text as="span" variant="h4">
        {name}
      </Text>
      <Text as="span" variant="p1">
        {totalEarnings}
      </Text>
      <Text as="span" variant="p2" truncate>
        {description}
      </Text>
      <Text as="span" variant="p2">
        {totalDistance}
      </Text>
    </div>
  </div>
);

export default Driver;
