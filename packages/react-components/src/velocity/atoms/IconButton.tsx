/** @jsxImportSource @emotion/react */
import { CSSObject, useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

export interface IconButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'rounded' | 'squared';
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'squared', ...props }, ref) => {
    const { color, font, transition } = useTheme();

    const variants: Record<typeof variant, CSSObject> = {
      rounded: {
        borderRadius: '50%',
      },
      squared: {
        borderRadius: 4,
      },
    };

    return (
      <button
        css={[
          variants[variant],
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
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
