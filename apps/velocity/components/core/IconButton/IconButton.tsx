import { ButtonHTMLAttributes, forwardRef } from 'react';
import { rgba, transitions } from 'polished';

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function Button(props, ref) {
  return (
    <button
      css={({ color, transition, font }) => ({
        alignItems: 'center',
        background: 'none',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        display: 'flex',
        fontWeight: font.weight.medium,
        justifyContent: 'center',
        padding: 5,
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
      })}
      data-testid="button"
      ref={ref}
      type="button"
      {...props}
    />
  );
});

export default Button;
