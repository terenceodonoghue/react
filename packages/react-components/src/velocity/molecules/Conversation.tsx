/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import Article from '../atoms/Article.js';
import Avatar from '../atoms/Avatar.js';
import Status from '../atoms/Status.js';

export interface ConversationProps extends ComponentPropsWithRef<'input'> {
  avatar?: string;
  message?: string;
  name: string;
  time?: string;
  unread?: boolean;
}

const Conversation = forwardRef<HTMLInputElement, ConversationProps>(
  (
    { avatar, className, name, message, style, time, unread = false, ...props },
    ref,
  ) => {
    const inputId = useId();
    const { color, transition } = useTheme();

    return (
      <div
        className={className}
        css={{
          position: 'relative',
        }}
        style={style}
      >
        <input
          css={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0,
            '&:enabled': {
              cursor: 'pointer',
            },
            '&:disabled': {
              cursor: 'not-allowed',
            },
          }}
          id={inputId}
          name="conversation"
          ref={ref}
          type="radio"
          {...props}
        />
        <Article
          css={{
            paddingBlock: 20,
            paddingInline: 24,
            backgroundColor: color.neutral[50],
            border: 'none',
            cursor: 'pointer',
            ...transitions(['background-color'], transition.quickly),
            'input:checked ~ &': {
              backgroundColor: color.neutral[100],
            },
            'input:focus-visible ~ &': {
              outline: `solid 2px ${color.primary}`,
              outlineOffset: -2,
            },
            'input:enabled:hover ~ &': {
              backgroundColor: color.neutral[100],
            },
          }}
          labelFor={inputId}
          text={[name, message, time]}
          variant="muted"
        >
          <Status aria-label="Unread" show={unread}>
            <Avatar alt={`${name}'s avatar`} size={48} src={avatar} />
          </Status>
        </Article>
      </div>
    );
  },
);

Conversation.displayName = 'Conversation';

export default Conversation;
