/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef, useId } from 'react';

import Text from '../primitives/Text.js';

export interface TextFieldProps extends ComponentPropsWithRef<'input'> {
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, label, style, ...props }, ref) => {
    const inputId = useId();
    const { color, font, transition } = useTheme();

    return (
      <div className={className} style={style}>
        {label ? (
          <Text
            as="label"
            css={{
              display: 'block',
              margin: '0 0 8px',
            }}
            htmlFor={inputId}
            variant="c1"
          >
            {label}
          </Text>
        ) : undefined}
        <input
          css={{
            display: 'block',
            width: '100%',
            padding: '10px 16px',
            color: color.neutral[900],
            backgroundColor: rgba(color.secondary, 0.2),
            border: 'solid 1px #E0E7FF',
            borderRadius: 5,
            fontSize: rem(15),
            fontFamily: font.family,
            ...transitions(['border', 'opacity'], transition.slowly),
            '&:disabled': {
              opacity: 0.3,
            },
            '&:focus': {
              border: `solid 1px ${color.primary}`,
              outline: 0,
            },
            '&::placeholder': {
              color: color.neutral[600],
            },
          }}
          id={inputId}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
