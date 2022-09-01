import type { FunctionComponent, HTMLAttributes } from 'react';

import Avatar from '../atoms/Avatar.js';
import Text from '../primitives/Text.js';

export interface CustomerProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  name: string;
  interactions: number;
}

const Customer: FunctionComponent<CustomerProps> = ({
  avatar,
  name,
  interactions,
  ...props
}) => (
  <div css={{ display: 'flex', alignItems: 'center', gap: 16 }} {...props}>
    <Avatar size={48} src={avatar} />
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <Text variant="h4">{name}</Text>
      <Text variant="p2" truncate>
        {interactions} interaction{interactions > 1 ? 's' : ''}
      </Text>
    </div>
  </div>
);

export default Customer;
