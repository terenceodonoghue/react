/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import {
  InputHTMLAttributes,
  FunctionComponent,
  forwardRef,
  useId,
} from 'react';

import Text from '../primitives/Text.js';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Radio: FunctionComponent<RadioProps> = forwardRef<
  HTMLInputElement,
  RadioProps
>(({ className, id, label, style, ...props }, ref) => {
  const defaultId = useId();
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
          margin: 0,
          height: 16,
          width: 16,
          opacity: 0,
          '&:enabled': {
            cursor: 'pointer',
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
        id={id || defaultId}
        ref={ref}
        type="radio"
        {...props}
      />
      <span
        css={{
          position: 'relative',
          border: `solid 1px ${rgba(color.neutral[700], 0.5)}`,
          borderRadius: '50%',
          height: 16,
          width: 16,
          margin: '0 8px 0 0',
          pointerEvents: 'none',
          '&::before': {
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '100%',
            borderRadius: '50%',
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
          htmlFor={id || defaultId}
          variant="h4"
        >
          {label}
        </Text>
      ) : undefined}
    </div>
  );
});

export default Radio;
