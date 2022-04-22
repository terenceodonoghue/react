import { rgba, transitions as transition } from 'polished';
import React, {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
} from 'react';

interface SwitchProps extends LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: RefObject<HTMLInputElement>;
  primary?: string;
  secondary?: string;
}

const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  ({ inputProps, inputRef, primary, secondary, ...props }, ref) => (
    <label
      css={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      data-testid="switch"
      ref={ref}
      {...props}
    >
      {(primary || secondary) && (
        <div
          css={{ display: 'flex', flexDirection: 'column', marginRight: 60 }}
        >
          {primary && (
            <span
              css={({ typography }) => ({
                fontWeight: typography.fontWeight.medium,
              })}
              data-testid="switch-primary"
            >
              {primary}
            </span>
          )}
          {secondary && (
            <span
              css={({ palette }) => ({
                color: palette.neutral[600],
              })}
              data-testid="switch-secondary"
            >
              {secondary}
            </span>
          )}
        </div>
      )}
      <input
        css={{ height: 0, margin: 0, width: 0, opacity: 0 }}
        data-testid="switch-input"
        ref={inputRef}
        type="checkbox"
        {...inputProps}
      />
      <span
        css={({ palette, transitions }) => ({
          backgroundColor: rgba(palette.neutral[600], 0.4),
          borderRadius: 10,
          cursor: 'pointer',
          height: 20,
          position: 'relative',
          width: 36,
          ...transition(
            ['background-color', 'opacity'],
            `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
          ),
          '&::before': {
            backgroundColor: palette.neutral[50],
            borderRadius: '50%',
            content: '""',
            height: 16,
            left: 2,
            position: 'absolute',
            top: 2,
            width: 16,
            ...transition(
              'transform',
              `${transitions.duration.standard}ms ${transitions.easing.sharp}`,
            ),
            'input:checked + &': {
              transform: 'translateX(16px)',
            },
          },
          'input:checked:enabled + &': {
            backgroundColor: palette.ui.green,
          },
          'input:disabled + &': {
            opacity: 0.4,
          },
        })}
      />
    </label>
  ),
);

export default Switch;
