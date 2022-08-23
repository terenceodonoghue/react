/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Avatar from '../atoms/Avatar.js';
import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface ChatCardProps extends HTMLAttributes<HTMLDivElement> {
  avatar: string;
  name: string;
  message: string;
  online?: boolean;
  selected?: boolean;
  time: string;
}

const ChatCard: FunctionComponent<ChatCardProps> = ({
  avatar,
  name,
  message,
  online = false,
  selected = false,
  time,
  ...props
}) => {
  const { color, transition } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '20px 24px',
        backgroundColor: selected ? color.neutral[100] : color.neutral[50],
        cursor: 'pointer',
        ...transitions(['background-color'], transition.quickly),
        '&:hover': {
          backgroundColor: color.neutral[100],
        },
      }}
      {...props}
    >
      <Indicator visible={online}>
        <Avatar size={48} src={avatar} />
      </Indicator>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Text as="span" variant="h4" truncate>
          {name}
        </Text>
        <Text as="span" variant="p2" align="right">
          {time}
        </Text>
        <Text css={{ gridColumn: '1 / 3' }} as="span" variant="p2" truncate>
          {message}
        </Text>
      </div>
    </div>
  );
};

export default ChatCard;
