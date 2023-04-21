/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { transitions } from 'polished';
import {
  FunctionComponent,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from 'react';

import Avatar from '../atoms/Avatar.js';
import Indicator from '../atoms/Indicator.js';
import Text from '../primitives/Text.js';

export interface ConversationProps
  extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  avatar?: string;
  name: string;
  message?: string;
  time?: string;
}

const Conversation: FunctionComponent<ConversationProps> = forwardRef<
  HTMLInputElement,
  ConversationProps
>(
  (
    { active = false, avatar, className, name, message, style, time, ...props },
    ref,
  ) => {
    const labelId = useId();
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
          aria-labelledby={labelId}
          css={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: 0,
            '&:enabled': {
              cursor: 'pointer',
            },
            '&:disabled': {
              cursor: 'not-allowed',
            },
          }}
          name="conversation"
          ref={ref}
          type="radio"
          {...props}
        />
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '20px 24px',
            backgroundColor: color.neutral[50],
            textAlign: 'left',
            cursor: 'pointer',
            border: 'none',
            ...transitions(['background-color'], transition.quickly),
            'input:checked ~ &': {
              backgroundColor: color.neutral[100],
            },
            'input:focus-visible ~ &': {
              outline: `solid 2px ${color.primary}`,
              outlineOffset: -2,
            },
            '&:hover': {
              backgroundColor: color.neutral[100],
            },
          }}
        >
          <Indicator
            aria-label={`${name}, ${active ? 'Active' : 'Away'}`}
            id={labelId}
            visible={active}
          >
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
            {time ? (
              <Text as="span" variant="p2" align="right">
                {time}
              </Text>
            ) : undefined}
            {message ? (
              <Text
                css={{ gridColumn: '1 / 3' }}
                as="span"
                variant="p2"
                truncate
              >
                {message}
              </Text>
            ) : undefined}
          </div>
        </div>
      </div>
    );
  },
);

export default Conversation;
