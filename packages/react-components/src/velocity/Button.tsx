/** @jsxImportSource @emotion/react */
import { Interpolation, Theme, useTheme } from '@emotion/react';
import { darken, rgba, rem, transitions } from 'polished';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
}

const Button: FunctionComponent<ButtonProps> = ({
  variant = 'contained',
  ...props
}) => {
  const { color, font, transition } = useTheme();

  const css: Record<string, Interpolation<Theme>> = {
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
      css={{
        ...css[variant],
        border: 'none',
        borderRadius: 4,
        minWidth: 100,
        padding: 10,
        fontFamily: font.family,
        fontSize: rem(15),
        fontWeight: 500,
        lineHeight: rem(21),
        cursor: 'pointer',
        ...transitions(['background-color'], transition.quickly),
        '&:disabled': {
          opacity: 0.3,
        },
      }}
      type="button"
      {...props}
    />
  );
};

export default Button;
