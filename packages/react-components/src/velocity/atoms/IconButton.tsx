/** @jsxImportSource @emotion/react */
import { type CSSObject, useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import type { ButtonHTMLAttributes, FunctionComponent } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'rounded' | 'square';
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  variant = 'rounded',
  ...props
}) => {
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          padding: 5,
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
      type="button"
      {...props}
    />
  );
};

export default IconButton;
