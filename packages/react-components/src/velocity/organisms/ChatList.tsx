import { useTheme } from '@emotion/react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import ChatCard, { type ChatCardProps } from '../molecules/ChatCard.js';
import mq from '../utils/mq.js';

export interface ChatListProps extends HTMLAttributes<HTMLDivElement> {
  chats: ChatCardProps[];
}

const ChatList: FunctionComponent<ChatListProps> = ({ chats, ...props }) => {
  const { color } = useTheme();

  return (
    <div
      css={mq({
        borderRight: [undefined, `solid 1px ${color.neutral[200]}`],
        height: '100%',
        backgroundColor: color.neutral[50],
        overflow: 'scroll',
      })}
      {...props}
    >
      {chats.map((chat) => (
        <ChatCard
          css={{ borderBottom: `solid 1px ${color.neutral[200]}` }}
          key={chat.name}
          {...chat}
        />
      ))}
    </div>
  );
};

export default ChatList;
