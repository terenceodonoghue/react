/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef, useId } from 'react';

import Conversation, { ConversationProps } from '../molecules/Conversation.js';

export interface ConversationsProps
  extends ComponentPropsWithoutRef<'fieldset'> {
  list?: ConversationProps[];
}

const Conversations = ({ list = [], ...props }: ConversationsProps) => {
  const labelId = useId();
  const descriptionId = useId();
  const { color } = useTheme();

  const unread = list.filter((it) => it.unread).length;

  return (
    <fieldset
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      css={{
        display: 'flex',
        flexDirection: 'column',
        minInlineSize: 'auto',
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: color.neutral[50],
        border: 'none',
        overflow: 'scroll',
      }}
      {...props}
    >
      <legend hidden id={labelId}>
        Conversations
      </legend>
      <span hidden id={descriptionId}>
        {unread
          ? `${unread} conversation${unread === 1 ? '' : 's'} with `
          : 'No'}{' '}
        unread messages
      </span>
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
