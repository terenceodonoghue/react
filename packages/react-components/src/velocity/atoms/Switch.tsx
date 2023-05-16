/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { InputHTMLAttributes, FunctionComponent, forwardRef } from 'react';

export type SwitchProps = InputHTMLAttributes<HTMLInputElement>;

const Switch: FunctionComponent<SwitchProps> = forwardRef<
  HTMLInputElement,
  SwitchProps
>(({ className, style, ...props }, ref) => {
  const { color, transition } = useTheme();

  return (
    <div
      className={className}
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      style={style}
    >
      <input
        css={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: 0,
          '&:enabled': {
            cursor: 'pointer',
          },
          '&:disabled': {
            cursor: 'not-allowed',
          },
        }}
        ref={ref}
        role="switch"
        type="checkbox"
        {...props}
      />
      <span
        aria-hidden
        css={{
          position: 'relative',
          borderRadius: 10,
          height: 20,
          width: 36,
          backgroundColor: rgba(color.neutral[600], 0.4),
          ...transitions(['background-color'], transition.slowly),
          pointerEvents: 'none',
          '&::before': {
            position: 'absolute',
            top: 2,
            left: 2,
            content: '""',
            borderRadius: '50%',
            height: 16,
            width: 16,
            backgroundColor: color.neutral[50],
            ...transitions(['transform'], transition.slowly),
            'input:checked ~ &': {
              transform: 'translateX(16px)',
            },
          },
          'input:checked ~ &': {
            backgroundColor: color.ui.green,
          },
          'input:disabled ~ &': {
            opacity: 0.4,
          },
          'input:focus-visible ~ &': {
            outline: `solid 2px ${color.primary}`,
            outlineOffset: -2,
          },
        }}
      />
    </div>
  );
});

export default Switch;
