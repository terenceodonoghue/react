import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { darken, rgba } from 'polished';

interface Styles {
  [name: string]: Interpolation<Theme>;
}

const styles: Styles = {
  contained: ({ palette }) => ({
    backgroundColor: palette.accent,
    color: palette.neutral[50],
    height: 40,
    padding: 0,
    width: 200,
    '&:enabled:hover': {
      backgroundColor: darken(palette.tonalOffset, palette.accent),
    },
  }),
  icon: ({ palette }) => ({
    background: 'none',
    padding: 5,
    '&:enabled:hover': {
      backgroundColor: rgba(palette.accent, 0.1),
    },
  }),
  outlined: ({ palette }) => ({
    background: palette.primary,
    color: palette.accent,
    height: 40,
    padding: 0,
    width: 200,
    '&:enabled:hover': {
      backgroundColor: darken(palette.tonalOffset, palette.accent),
    },
  }),
  text: ({ palette }) => ({
    background: 'none',
    color: palette.accent,
    height: 40,
    padding: 0,
    width: 200,
    '&:enabled:hover': {
      backgroundColor: darken(palette.tonalOffset, palette.accent),
    },
  }),
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'icon' | 'outlined' | 'text';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'contained', ...props },
  ref,
) {
  return (
    <button
      css={[
        ({ transitions, typography }) => ({
          alignItems: 'center',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          display: 'flex',
          fontWeight: typography.fontWeight.medium,
          justifyContent: 'center',
          transition: `background-color ${transitions.duration.standard}ms
            ${transitions.easing.easeInOut}`,
          '&:disabled': {
            opacity: 0.3,
            pointerEvents: 'none',
          },
          '&:focus': {
            outline: 0,
          },
        }),
        styles[variant],
      ]}
      data-testid="button"
      ref={ref}
      type="button"
      {...props}
    />
  );
});

export default Button;
