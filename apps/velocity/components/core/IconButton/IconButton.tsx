import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { darken, rgba } from 'polished';

interface Styles {
  [name: string]: Interpolation<Theme>;
}

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(props, ref) {
  return (
    <button
      css={({ palette, transitions, typography }) => ({
        alignItems: 'center',
        background: 'none',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        display: 'flex',
        fontWeight: typography.fontWeight.medium,
        justifyContent: 'center',
        padding: 5,
        transition: `background-color ${transitions.duration.standard}ms
            ${transitions.easing.easeInOut}`,
        '&:enabled:hover': {
          backgroundColor: rgba(palette.accent, 0.1),
        },
        '&:disabled': {
          opacity: 0.3,
          pointerEvents: 'none',
        },
        '&:focus': {
          outline: 0,
        },
      })}
      data-testid="button"
      ref={ref}
      type="button"
      {...props}
    />
  );
});

export default Button;
