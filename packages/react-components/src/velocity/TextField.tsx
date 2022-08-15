/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem, rgba, transitions } from 'polished';
import { InputHTMLAttributes, FunctionComponent } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField: FunctionComponent<TextFieldProps> = ({
  id,
  label,
  ...props
}) => {
  const { color, font, transition } = useTheme();

  return (
    <label
      css={{
        color: color.neutral[500],
        fontSize: rem(12),
        fontWeight: font.weight.medium,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
      }}
      htmlFor={id}
    >
      {label ? (
        <span
          css={{
            display: 'block',
            margin: '0 0 8px',
            '&:empty': {
              display: 'none',
            },
          }}
        >
          {label}
        </span>
      ) : undefined}
      <input
        css={{
          display: 'block',
          border: 'solid 1px #E0E7FF',
          borderRadius: 5,
          padding: '10px 16px',
          backgroundColor: rgba('#E0E7FF', 0.2),
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
