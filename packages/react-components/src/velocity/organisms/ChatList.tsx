/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent } from 'react';

import ChatCard, { type ChatCardProps } from '../molecules/ChatCard.js';

export interface ChatListProps {
  chats: ChatCardProps[];
}

const ChatList: FunctionComponent<ChatListProps> = ({ chats }) => {
  const { color } = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        backgroundColor: color.neutral[200],
      }}
    >
      {chats.map((chat) => (
        <ChatCard {...chat} />
      ))}
    </div>
  );
};

export default ChatList;
