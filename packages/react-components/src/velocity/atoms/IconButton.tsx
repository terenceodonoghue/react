/** @jsxImportSource @emotion/react */
import { type CSSObject, useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ButtonHTMLAttributes, forwardRef, FunctionComponent } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'rounded' | 'square';
}

const IconButton: FunctionComponent<IconButtonProps> = forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ variant = 'square', ...props }, ref) => {
  const { color, font, transition } = useTheme();

  const css: Record<string, CSSObject> = {
    rounded: {
      borderRadius: '50%',
    },
    square: {
      borderRadius: 4,
    },
  };

  return (
    <button
      css={[
        css[variant],
        {
          border: 'none',
          padding: 4,
          background: 'none',
          fontWeight: font.weight.medium,
          cursor: 'pointer',
          ...transitions(['background-color'], transition.quickly),
          '&:enabled:hover': {
            backgroundColor: rgba(color.primary, 0.1),
          },
          '&:disabled': {
            opacity: 0.3,
            pointerEvents: 'none',
          },
          '&:focus': {
            outline: 0,
          },
        },
      ]}
      ref={ref}
      type="button"
      {...props}
    />
  );
});

export default IconButton;
