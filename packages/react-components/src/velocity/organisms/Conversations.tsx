/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import type { FunctionComponent, HTMLAttributes } from 'react';

import Conversation, {
  type ConversationProps,
} from '../molecules/Conversation.js';

export interface ConversationsProps
  extends HTMLAttributes<HTMLFieldSetElement> {
  list: ConversationProps[];
}

const Conversations: FunctionComponent<ConversationsProps> = ({
  list = [],
  ...props
}) => {
  const { color } = useTheme();

  return (
    <fieldset
      css={{
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: color.neutral[50],
        overflow: 'scroll',
      }}
      {...props}
    >
      {list.map((conversation) => (
        <Conversation
          css={{ borderBottom: `solid 1px ${color.neutral[200]}` }}
          key={conversation.name}
          {...conversation}
        />
      ))}
    </fieldset>
  );
};

export default Conversations;
