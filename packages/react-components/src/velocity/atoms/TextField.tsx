/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba, transitions } from 'polished';
import { InputHTMLAttributes, FunctionComponent, forwardRef } from 'react';

import Text from '../primitives/Text.js';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FunctionComponent<TextFieldProps> = forwardRef<
  HTMLInputElement,
  TextFieldProps
>(({ className, id, label, style, ...props }, ref) => {
  const { color, font, transition } = useTheme();

  return (
    <label className={className} htmlFor={id} style={style}>
      {label ? (
        <Text
          css={{
            display: 'block',
            margin: '0 0 8px',
          }}
          as="span"
          variant="c1"
        >
          {label}
        </Text>
      ) : undefined}
      <input
        css={{
          display: 'block',
          border: 'solid 1px #E0E7FF',
          borderRadius: 5,
          padding: '10px 16px',
          backgroundColor: rgba(color.secondary, 0.2),
          color: color.neutral[900],
          fontFamily: font.family,
          fontSize: rem(15),
          width: '100%',
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
        id={id}
        ref={ref}
        {...props}
      />
    </label>
  );
});

export default TextField;
