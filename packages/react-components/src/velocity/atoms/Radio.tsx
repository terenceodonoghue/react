/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import Text from '../primitives/Text.js';

export interface RadioProps extends ComponentPropsWithRef<'input'> {
  label?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, style, ...props }, ref) => {
    const inputId = useId();
    const { color } = useTheme();

    return (
      <div
        className={className}
        css={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
        style={style}
      >
        <input
          css={{
            position: 'absolute',
            width: 16,
            height: 16,
            margin: 0,
            opacity: 0,
            '&:enabled': {
              cursor: 'pointer',
            },
            '&:disabled': {
              cursor: 'not-allowed',
            },
          }}
          id={inputId}
          ref={ref}
          type="radio"
          {...props}
        />
        <span
          css={{
            position: 'relative',
            width: 16,
            height: 16,
            margin: '0 8px 0 0',
            border: `solid 1px ${rgba(color.neutral[700], 0.5)}`,
            borderRadius: '50%',
            pointerEvents: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              outline: `solid 2px ${rgba(color.primary, 0.3)}`,
              transform: 'scale(0)',
              'input:focus-visible ~ &': {
                transform: 'scale(2)',
              },
            },
            'input:checked ~ &': {
              border: `solid 4px ${color.primary}`,
            },
            'input:disabled ~ &': {
              opacity: 0.4,
            },
          }}
        />
        {label ? (
          <Text
            as="label"
            css={{
              'input:disabled ~ &': {
                opacity: 0.4,
              },
            }}
            htmlFor={inputId}
            variant="h4"
          >
            {label}
          </Text>
        ) : undefined}
      </div>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
