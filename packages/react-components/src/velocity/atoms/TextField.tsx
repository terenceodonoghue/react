import { useTheme } from '@emotion/react';
import { rem, rgba, transitions } from 'polished';
import type { InputHTMLAttributes, FunctionComponent } from 'react';

import Text from '../primitives/Text.js';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FunctionComponent<TextFieldProps> = ({
  className,
  id,
  label,
  style,
  ...props
}) => {
  const { color, font, transition } = useTheme();

  return (
    <label className={className} htmlFor={id} style={style}>
      {label ? (
        <Text
          css={{
            display: 'block',
            margin: '0 0 8px',
          }}
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
        {...props}
      />
    </label>
  );
};

export default TextField;
