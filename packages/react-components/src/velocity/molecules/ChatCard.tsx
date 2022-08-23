/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent } from 'react';

import Avatar from '../atoms/Avatar.js';
import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface ChatCardProps {
  avatar: string;
  name: string;
  message: string;
  online: boolean;
  selected: boolean;
  time: string;
}

const ChatCard: FunctionComponent<ChatCardProps> = ({
  avatar,
  name,
  message,
  online = false,
  selected = false,
  time,
}) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '20px 24px',
        backgroundColor: selected ? color.neutral[100] : color.neutral[50],
        cursor: 'pointer',
      }}
    >
      <Indicator visible={online}>
        <Avatar size={48} src={avatar} />
      </Indicator>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
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
