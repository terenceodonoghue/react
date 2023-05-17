/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba, transitions } from 'polished';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type SwitchProps = ComponentPropsWithRef<'input'>;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, style, ...props }, ref) => {
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
            width: '100%',
            height: '100%',
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
          css={{
            position: 'relative',
            width: 36,
            height: 20,
            backgroundColor: rgba(color.neutral[600], 0.4),
            borderRadius: 10,
            ...transitions(['background-color'], transition.slowly),
            pointerEvents: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 2,
              left: 2,
              width: 16,
              height: 16,
              backgroundColor: color.neutral[50],
              borderRadius: '50%',
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
  },
);

Switch.displayName = 'Switch';

export default Switch;
