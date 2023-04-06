/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import { ButtonHTMLAttributes, FunctionComponent, useId } from 'react';

import Avatar from '../atoms/Avatar.js';
import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface ChatCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  avatar: string;
  name: string;
  message?: string;
  online?: boolean;
  selected?: boolean;
  time?: string;
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
  const descriptionId = useId();
  const { color, transition } = useTheme();

  return (
    <button
      aria-label={`Chat with ${name}`}
      aria-describedby={descriptionId}
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '20px 24px',
        backgroundColor: selected ? color.neutral[100] : color.neutral[50],
        textAlign: 'left',
        cursor: 'pointer',
        border: 'none',
        ...transitions(['background-color'], transition.quickly),
        '&:focus-visible': {
          outline: `solid 2px ${color.primary}`,
        },
        '&:hover': {
          backgroundColor: color.neutral[100],
        },
      }}
      type="button"
      {...props}
    >
      <Indicator visible={online}>
        <Avatar alt={`${name}'s avatar`} size={48} src={avatar} />
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
          <span hidden id={descriptionId}>
            {message ? `Last message, ${message}` : `No messages`}
          </span>
          {message}
        </Text>
      </div>
    </button>
  );
};

export default ChatCard;
