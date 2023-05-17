/** @jsxImportSource @emotion/react */
import { CSSObject, useTheme } from '@emotion/react';
import { darken, rgba, rem, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'outline' | 'minimal';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => {
    const { color, font, transition } = useTheme();

    const variants: Record<typeof variant, CSSObject> = {
      primary: {
        color: 'white',
        backgroundColor: color.primary,
        '&:enabled:hover': {
          backgroundColor: darken(color.tonalOffset, color.primary),
        },
      },
      outline: {
        color: color.primary,
        backgroundColor: rgba(color.primary, color.tonalOffset),
        '&:enabled:hover': {
          backgroundColor: rgba(color.primary, 0.4),
        },
      },
      minimal: {
        color: color.primary,
        background: 'none',
        '&:enabled:hover': {
          backgroundColor: rgba(color.primary, 0.2),
        },
      },
    };

    return (
      <button
        css={[
          variants[variant],
          {
            minWidth: 100,
            padding: 10,
            border: 'none',
            borderRadius: 4,
            fontSize: rem(15),
            fontFamily: font.family,
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
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
