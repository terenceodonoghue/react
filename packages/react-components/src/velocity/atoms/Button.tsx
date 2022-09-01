import { type CSSObject, useTheme } from '@emotion/react';
import { darken, rgba, rem, transitions } from 'polished';
import type { ButtonHTMLAttributes, FunctionComponent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
}

const Button: FunctionComponent<ButtonProps> = ({
  variant = 'contained',
  ...props
}) => {
  const { color, font, transition } = useTheme();

  const css: Record<string, CSSObject> = {
    contained: {
      backgroundColor: color.primary,
      color: 'white',
      '&:enabled:hover': {
        backgroundColor: darken(color.tonalOffset, color.primary),
      },
    },
    outlined: {
      backgroundColor: rgba(color.primary, color.tonalOffset),
      color: color.primary,
      '&:enabled:hover': {
        backgroundColor: rgba(color.primary, 0.4),
      },
    },
    text: {
      background: 'none',
      color: color.primary,
      '&:enabled:hover': {
        backgroundColor: rgba(color.primary, 0.2),
      },
    },
  };

  return (
    <button
      css={[
        css[variant],
        {
          border: 'none',
          borderRadius: 4,
          minWidth: 100,
          padding: 10,
          fontFamily: font.family,
          fontSize: rem(15),
          fontWeight: 500,
          lineHeight: rem(21),
          ...transitions(['background-color'], transition.quickly),
          '&:enabled': {
            cursor: 'pointer',
          },
          '&:disabled': {
            opacity: 0.3,
          },
        },
      ]}
      type="button"
      {...props}
    />
  );
};

export default Button;
